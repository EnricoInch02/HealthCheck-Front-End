import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserSession } from '../../../models/login.model';
import { RegisterService } from '../../services/register.service';
import { Registry, RegistryDTO } from '../../../models/register.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { User, UserDTO, UserList } from '../../../models/user.model';
import { FullUserFormService } from '../../services/full-user-form.service';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.scss',
  providers: [MessageService],
})
export class HomeProfileComponent implements OnInit {
  patient: UserSession | null = this.loginservice.getLoggedUser();
  user!: User;
  registrypatient!: Registry;
  file!: File;
  dialog: boolean = false;
  errorMessage!: string;
  modelUser: UserDTO = new UserDTO(null);
  modelRegistry: RegistryDTO = new RegistryDTO(null);

  constructor(
    private loginservice: LoginService,
    private registerservice: RegisterService,
    private userService: UserService,
    private router: Router,
    private fullFormService: FullUserFormService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.registerservice
      .readRegistryIdUser(this.patient!.id)
      .subscribe((registry) => {
        this.registrypatient = registry;
        this.modelRegistry = new RegistryDTO(
          this.registrypatient.id,
          this.registrypatient.name,
          this.registrypatient.surname,
          (this.registrypatient.gender =
            this.registrypatient.gender == 'MASCHIO' ? '0' : '1'),
          this.registrypatient.birthDate,
          this.registrypatient.birthPlace,
          this.registrypatient.nationality,
          this.registrypatient.city,
          this.registrypatient.address,
          this.registrypatient.bg,
          this.registrypatient.cf,
          this.patient!.id
        );
        this.userService.readUser(registry.idUser).subscribe((user) => {
          this.user = user;
          this.modelUser = new UserDTO(
            this.user.id,
            this.user.email,
            this.user.password,
            this.user.pathImage,
            this.user.usertype
          );
        });
      });
  }

  delete() {
    this.userService.deleteUser(this.user.id).subscribe();
    this.router.navigate(['']);
  }

  onUpload(event: any) {
    this.file = event.files[0];
    this.userService
      .uploadImageUser(this.modelUser.email, this.file)
      .subscribe();
  }

  updateUser() {
    this.userService.updateUser(this.modelUser).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Fatto!',
        detail: 'Credenziali modificate',
        life: 3000,
      });
    });
  }

  updateRegistry() {
    this.registerservice.updateRegistry(this.modelRegistry).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Fatto!',
        detail: 'Anagrafica modificata',
        life: 3000,
      });
    });
  }

  handleDateSelection(event: any) {
    this.modelRegistry.birthDate = event.toISOString().split('T')[0];
  }

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
}
