from django.contrib import admin

from project.employee_contract.models import EmployeeContractProfile
from project.employee_personal.admin import EmployeePersonalProfileAdmin
from project.employee_personal.models import EmployeePersonalProfile
from project.holiday.models import HolidayRequest
from project.overtime.models import OvertimeRequest
from project.request.models import Request
from project.time_back.models import TimeBack
from project.time_tracking.models import TimeTracker

admin.site.register(EmployeePersonalProfile, EmployeePersonalProfileAdmin)
# admin.site.register(EmployeeProfileManager)
admin.site.register(EmployeeContractProfile)
admin.site.register(HolidayRequest)
admin.site.register(OvertimeRequest)
admin.site.register(Request)
admin.site.register(TimeTracker)
admin.site.register(TimeBack)
