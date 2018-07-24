from django.contrib import admin


class EmployeePersonalProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'avatar', 'street_and_number', 'city', 'postcode', 'country', 'phone_number']
