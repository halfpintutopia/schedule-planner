# Start with an image
FROM ubuntu:16.04

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

# Install the following (necessary):
RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
wget \
bzip2 \
# graphviz \
libssl-dev \
openssh-server \
nodejs \
npm

RUN mkdir /var/run/sshd
RUN echo "root:screencast" | chpasswd
RUN sed -i "/PermitRootLogin/c\PermitRootLogin yes" /etc/ssh/sshd_config

# SSH login fix - otherwise user is kicked off after login
RUN sed "s@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g" -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Install miniconda
RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh


# Install NodeJS
RUN npm install -g n
#RUN npm install -g webpack-cli@2.0.2
RUN npm install -g yarn
RUN n 9.11.1

# Create directories in our image
RUN mkdir -p /scheduleapp | \
mkdir -p /frontend | \
mkdir -p /media-files | \
mkdir -p /static-files | \
mkdir -p /database

# Install our requirements
COPY ./scheduleapp/requirements.yml /scheduleapp/requirements.yml
RUN /opt/miniconda/bin/conda env create -f /scheduleapp/requirements.yml


# Activate conda environment
ENV PATH /opt/miniconda/envs/scheduleapp/bin:$PATH
#RUN sed '$ a source activate app' -i /root/.bashrc

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN yarn install
COPY ./frontend /frontend
RUN npm run build

COPY /scheduleapp /scheduleapp

COPY ./scripts/* /scripts/
# Specify the command to run when the image is run
RUN chmod +x /scripts/*

WORKDIR /scheduleapp

EXPOSE 8000
EXPOSE 22