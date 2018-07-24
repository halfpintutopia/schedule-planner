from django.contrib.auth.base_user import BaseUserManager


class EmployeeProfileManager(BaseUserManager):
    """
    Helps Django work with our custom  user model / Standard user
    """

    def create_user(self, email, first_name, last_name, password=None):
        """
        Creates a new employee_contract profile object
        """
        if not email:
            raise ValueError('Users must have an email address.')

        # Normalising the email address - converts characters to lowercase
        email = self.normalize_email(email)
        employee = self.model(email=email, first_name=first_name, last_name=last_name)

        employee.set_password(
            password)  # set password will encrypt (hash) to store into the database - best practice for secure system
        employee.save(using=self._db)

        return employee

    def create_superuser(self, email, first_name, last_name, password):
        """
        Creates and save a new superuser with given details / Administrative user
        """
        employee = self.create_employee(email, first_name, last_name, password)

        employee.is_superuser = True
        employee.is_staff = True

        employee.save(using=self._db)
