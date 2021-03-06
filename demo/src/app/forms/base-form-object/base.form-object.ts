import { Injector } from '@angular/core';
import { FormObject, FormModel, FormObjectOptions } from 'ngx-form-object';
import { CarService } from 'app/services/car/car.service';
import { CompanyService } from 'app/services/company/company.service';
import { UserService } from 'app/services/user/user.service';

export class BaseFormObject extends FormObject {
  constructor(
    public model: FormModel,
    protected options: FormObjectOptions,
    injector: Injector
  ) {
    super(model, options);

    this.serviceMappings = {
      Car: injector.get(CarService),
      Company: injector.get(CompanyService),
      User: injector.get(UserService)
    };
  }
}
