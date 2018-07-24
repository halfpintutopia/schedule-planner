import random


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for i in range(length))

# def float_two_decimals(self, *args, **kwargs):
#     self.time_accrued = round(self.time_accrued, 2)
#     super(TimeBack, self).save(*args, **kwargs)
