import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegisterDTO, RegistryDTO } from '../../../models/register.model';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterFormComponent {
  hide: boolean = true;
  userInsert!: RegisterDTO;
  insertRegistry!: RegistryDTO;
  emailExists!: User;
  errorMessage!: string;

  constructor(
    private _formBuilder: FormBuilder,
    private registerService: RegisterService,
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) {}

  formInsertUser = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  formRegistry = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    gender: ['', Validators.required],
    birthDate: ['', Validators.required],
    birthPlace: ['', Validators.required],
    nationality: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    cf: ['', Validators.required],
    bg: ['', Validators.required],
  });

  genders: any[] = [
    { value: '0', viewValue: 'Maschio' },
    { value: '1', viewValue: 'Femmina' },
  ];

  nationalities: any[] = [
    { value: 'AF', viewValue: 'AF' },
    { value: 'AL', viewValue: 'AL' },
    { value: 'DZ', viewValue: 'DZ' },
    { value: 'AD', viewValue: 'AD' },
    { value: 'AO', viewValue: 'AO' },
    { value: 'AG', viewValue: 'AG' },
    { value: 'AR', viewValue: 'AR' },
    { value: 'AM', viewValue: 'AM' },
    { value: 'AU', viewValue: 'AU' },
    { value: 'AT', viewValue: 'AT' },
    { value: 'AZ', viewValue: 'AZ' },
    { value: 'BS', viewValue: 'BS' },
    { value: 'BH', viewValue: 'BH' },
    { value: 'BD', viewValue: 'BD' },
    { value: 'BB', viewValue: 'BB' },
    { value: 'BY', viewValue: 'BY' },
    { value: 'BE', viewValue: 'BE' },
    { value: 'BZ', viewValue: 'BZ' },
    { value: 'BJ', viewValue: 'BJ' },
    { value: 'BT', viewValue: 'BT' },
    { value: 'BO', viewValue: 'BO' },
    { value: 'BA', viewValue: 'BA' },
    { value: 'BW', viewValue: 'BW' },
    { value: 'BR', viewValue: 'BR' },
    { value: 'BN', viewValue: 'BN' },
    { value: 'BG', viewValue: 'BG' },
    { value: 'BF', viewValue: 'BF' },
    { value: 'BI', viewValue: 'BI' },
    { value: 'KH', viewValue: 'KH' },
    { value: 'CM', viewValue: 'CM' },
    { value: 'CA', viewValue: 'CA' },
    { value: 'CV', viewValue: 'CV' },
    { value: 'CF', viewValue: 'CF' },
    { value: 'TD', viewValue: 'TD' },
    { value: 'CL', viewValue: 'CL' },
    { value: 'CN', viewValue: 'CN' },
    { value: 'CO', viewValue: 'CO' },
    { value: 'KM', viewValue: 'KM' },
    { value: 'CG', viewValue: 'CG' },
    { value: 'CD', viewValue: 'CD' },
    { value: 'CR', viewValue: 'CR' },
    { value: 'HR', viewValue: 'HR' },
    { value: 'CU', viewValue: 'CU' },
    { value: 'CY', viewValue: 'CY' },
    { value: 'CZ', viewValue: 'CZ' },
    { value: 'DK', viewValue: 'DK' },
    { value: 'DJ', viewValue: 'DJ' },
    { value: 'DM', viewValue: 'DM' },
    { value: 'DO', viewValue: 'DO' },
    { value: 'TL', viewValue: 'TL' },
    { value: 'EC', viewValue: 'EC' },
    { value: 'EG', viewValue: 'EG' },
    { value: 'SV', viewValue: 'SV' },
    { value: 'GQ', viewValue: 'GQ' },
    { value: 'ER', viewValue: 'ER' },
    { value: 'EE', viewValue: 'EE' },
    { value: 'ET', viewValue: 'ET' },
    { value: 'FJ', viewValue: 'FJ' },
    { value: 'FI', viewValue: 'FI' },
    { value: 'FR', viewValue: 'FR' },
    { value: 'GA', viewValue: 'GA' },
    { value: 'GM', viewValue: 'GM' },
    { value: 'GE', viewValue: 'GE' },
    { value: 'DE', viewValue: 'DE' },
    { value: 'GH', viewValue: 'GH' },
    { value: 'GR', viewValue: 'GR' },
    { value: 'GD', viewValue: 'GD' },
    { value: 'GT', viewValue: 'GT' },
    { value: 'GN', viewValue: 'GN' },
    { value: 'GW', viewValue: 'GW' },
    { value: 'GY', viewValue: 'GY' },
    { value: 'HT', viewValue: 'HT' },
    { value: 'HN', viewValue: 'HN' },
    { value: 'HU', viewValue: 'HU' },
    { value: 'IS', viewValue: 'IS' },
    { value: 'IN', viewValue: 'IN' },
    { value: 'ID', viewValue: 'ID' },
    { value: 'IR', viewValue: 'IR' },
    { value: 'IQ', viewValue: 'IQ' },
    { value: 'IE', viewValue: 'IE' },
    { value: 'IL', viewValue: 'IL' },
    { value: 'IT', viewValue: 'IT' },
    { value: 'CI', viewValue: 'CI' },
    { value: 'JM', viewValue: 'JM' },
    { value: 'JP', viewValue: 'JP' },
    { value: 'JO', viewValue: 'JO' },
    { value: 'KZ', viewValue: 'KZ' },
    { value: 'KE', viewValue: 'KE' },
    { value: 'KI', viewValue: 'KI' },
    { value: 'KW', viewValue: 'KW' },
    { value: 'KG', viewValue: 'KG' },
    { value: 'LA', viewValue: 'LA' },
    { value: 'LV', viewValue: 'LV' },
    { value: 'LB', viewValue: 'LB' },
    { value: 'LS', viewValue: 'LS' },
    { value: 'LR', viewValue: 'LR' },
    { value: 'LY', viewValue: 'LY' },
    { value: 'LI', viewValue: 'LI' },
    { value: 'LT', viewValue: 'LT' },
    { value: 'LU', viewValue: 'LU' },
    { value: 'MK', viewValue: 'MK' },
    { value: 'MG', viewValue: 'MG' },
    { value: 'MW', viewValue: 'MW' },
    { value: 'MY', viewValue: 'MY' },
    { value: 'MV', viewValue: 'MV' },
    { value: 'ML', viewValue: 'ML' },
    { value: 'MT', viewValue: 'MT' },
    { value: 'MH', viewValue: 'MH' },
    { value: 'MR', viewValue: 'MR' },
    { value: 'MU', viewValue: 'MU' },
    { value: 'MX', viewValue: 'MX' },
    { value: 'FM', viewValue: 'FM' },
    { value: 'MD', viewValue: 'MD' },
    { value: 'MC', viewValue: 'MC' },
    { value: 'MN', viewValue: 'MN' },
    { value: 'ME', viewValue: 'ME' },
    { value: 'MA', viewValue: 'MA' },
    { value: 'MZ', viewValue: 'MZ' },
    { value: 'MM', viewValue: 'MM' },
    { value: 'NA', viewValue: 'NA' },
    { value: 'NR', viewValue: 'NR' },
    { value: 'NP', viewValue: 'NP' },
    { value: 'NL', viewValue: 'NL' },
    { value: 'NZ', viewValue: 'NZ' },
    { value: 'NI', viewValue: 'NI' },
    { value: 'NE', viewValue: 'NE' },
    { value: 'NG', viewValue: 'NG' },
    { value: 'KP', viewValue: 'KP' },
    { value: 'NO', viewValue: 'NO' },
    { value: 'OM', viewValue: 'OM' },
    { value: 'PK', viewValue: 'PK' },
    { value: 'PW', viewValue: 'PW' },
    { value: 'PA', viewValue: 'PA' },
    { value: 'PG', viewValue: 'PG' },
    { value: 'PY', viewValue: 'PY' },
    { value: 'PE', viewValue: 'PE' },
    { value: 'PH', viewValue: 'PH' },
    { value: 'PL', viewValue: 'PL' },
    { value: 'PT', viewValue: 'PT' },
    { value: 'QA', viewValue: 'QA' },
    { value: 'RO', viewValue: 'RO' },
    { value: 'RU', viewValue: 'RU' },
    { value: 'RW', viewValue: 'RW' },
    { value: 'KN', viewValue: 'KN' },
    { value: 'LC', viewValue: 'LC' },
    { value: 'VC', viewValue: 'VC' },
    { value: 'WS', viewValue: 'WS' },
    { value: 'SM', viewValue: 'SM' },
    { value: 'ST', viewValue: 'ST' },
    { value: 'SA', viewValue: 'SA' },
    { value: 'SN', viewValue: 'SN' },
    { value: 'RS', viewValue: 'RS' },
    { value: 'SC', viewValue: 'SC' },
    { value: 'SL', viewValue: 'SL' },
    { value: 'SG', viewValue: 'SG' },
    { value: 'SK', viewValue: 'SK' },
    { value: 'SI', viewValue: 'SI' },
    { value: 'SB', viewValue: 'SB' },
    { value: 'SO', viewValue: 'SO' },
    { value: 'ZA', viewValue: 'ZA' },
    { value: 'KR', viewValue: 'KR' },
    { value: 'SS', viewValue: 'SS' },
    { value: 'ES', viewValue: 'ES' },
    { value: 'LK', viewValue: 'LK' },
    { value: 'SD', viewValue: 'SD' },
    { value: 'SR', viewValue: 'SR' },
    { value: 'SZ', viewValue: 'SZ' },
    { value: 'SE', viewValue: 'SE' },
    { value: 'CH', viewValue: 'CH' },
    { value: 'SY', viewValue: 'SY' },
    { value: 'TW', viewValue: 'TW' },
    { value: 'TJ', viewValue: 'TJ' },
    { value: 'TZ', viewValue: 'TZ' },
    { value: 'TH', viewValue: 'TH' },
    { value: 'TG', viewValue: 'TG' },
    { value: 'TO', viewValue: 'TO' },
    { value: 'TT', viewValue: 'TT' },
    { value: 'TN', viewValue: 'TN' },
    { value: 'TR', viewValue: 'TR' },
    { value: 'TM', viewValue: 'TM' },
    { value: 'TV', viewValue: 'TV' },
    { value: 'UG', viewValue: 'UG' },
    { value: 'UA', viewValue: 'UA' },
    { value: 'AE', viewValue: 'AE' },
    { value: 'UY', viewValue: 'UY' },
    { value: 'UZ', viewValue: 'UZ' },
    { value: 'VU', viewValue: 'VU' },
    { value: 'VA', viewValue: 'VA' },
    { value: 'VE', viewValue: 'VE' },
    { value: 'VN', viewValue: 'VN' },
    { value: 'YE', viewValue: 'YE' },
    { value: 'ZM', viewValue: 'ZM' },
    { value: 'ZW', viewValue: 'ZW' },
  ];

  bloodGroups: any[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB-', viewValue: 'AB-' },
    { value: '0+', viewValue: '0+' },
    { value: '0-', viewValue: '0-' },
  ];

  onSubmit() {
    try {
      if (this.formInsertUser.valid) {
        this.userInsert = new RegisterDTO(
          this.formInsertUser.value.email as string,
          this.formInsertUser.value.password as string,
          'USER'
        );
        this.registerService
          .register(this.userInsert)
          .pipe(
            catchError((err: HttpErrorResponse) => {
              this.errorMessage = err.error;
              return of(undefined);
            })
          )
          .subscribe((user) => {
            this.userService
              .findByEmailAndPassword(user!.email, user!.password)
              .pipe(
                catchError((err: HttpErrorResponse) => {
                  this.errorMessage = err.error;
                  return of(undefined);
                })
              )
              .subscribe((idUser) => {
                if (this.formRegistry.valid) {
                  this.insertRegistry = new RegistryDTO(
                    null,
                    this.formRegistry.value.name as string,
                    this.formRegistry.value.surname as string,
                    this.formRegistry.value.gender as string,
                    this.formRegistry.value.birthDate as string,
                    this.formRegistry.value.birthPlace as string,
                    this.formRegistry.value.nationality as string,
                    this.formRegistry.value.city as string,
                    this.formRegistry.value.address as string,
                    this.formRegistry.value.bg as string,
                    this.formRegistry.value.cf as string,
                    idUser!.id
                  );
                  this.registerService
                    .insertRegistry(this.insertRegistry)
                    .pipe(
                      catchError((err: HttpErrorResponse) => {
                        this.errorMessage = err.error;
                        return of(undefined);
                      })
                    )
                    .subscribe();
                } else {
                  console.log('err registr');
                }
              });
          });
      }
    } catch (error) {
      console.log('err');
    }
    this.router.navigate(['/landing/login']);
  }
}
