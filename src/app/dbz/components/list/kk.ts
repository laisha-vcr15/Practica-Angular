import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
  } from '@angular/core';
  import { AvatarModule } from 'primeng/avatar';
  import { TokenSesionService } from '../../../../shared/services/elf/token-session/token-session.service';
  import { SubheaderSuperiorComponent } from '../subheader-superior/subheader-superior.component';
  import { AsyncPipe, CommonModule } from '@angular/common';
  import {
    idStore,
    UsuarioSesion,
  } from '../../../../shared/services/elf/token-session/token.repository';
  import { Router } from '@angular/router';
  import { SharedModule } from '../../../../shared/shared.module';
  import { AccordionModule } from 'primeng/accordion';
  import { MaterialModule } from '../../../../material/material.module';
  import { DropdownModule } from 'primeng/dropdown';
  import { ComboItem } from '../../modules/seguimiento/models/consulta-registro.model';
  import { FormsModule } from '@angular/forms';
  import { AlertaService, TipoAlerta, } from '../../../../shared/components/alerta/service/alerta.service';
  import { MENSAJES_ERROR, MENSAJES_INFORMATIVOS,} from '../../../../shared/constants/mensajes';
  import { RUTA } from '../../../../shared/constants/navigation-routes';
  import { ROL } from '../../../../shared/constants/roles';
  import { MatMenuModule } from '@angular/material/menu';
  import { MatButtonModule } from '@angular/material/button';
  import { MatIconModule } from '@angular/material/icon';
  import { ModalDialogService } from '../../../../shared/components/message-dialog/service/modal-dialog.service';
  import { TIPO_MODAL } from '../../../../shared/components/message-dialog/enum/tipo-modal.enum';
  
  @Component({
    standalone: true,
    selector: 'app-header-superior-privado',
    templateUrl: './header-superior-privado.component.html',
    styleUrls: ['./header-superior-privado.component.scss'],
    imports: [
      AvatarModule,
      SubheaderSuperiorComponent,
      AsyncPipe,
      SharedModule,
      CommonModule,
      MaterialModule,
      DropdownModule,
      FormsModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
    ],
    providers: [ModalDialogService],
  })
  export class HeaderSuperiorPrivadoComponent implements OnInit {
    public usuarioSesion$ = this.tokenSesionService.obtenerUsuarioSesion$();
    public usuarioSesion: any = this.tokenSesionService.obtenerUsuarioSesion()!;
    public RUTA = RUTA;
    @Input() tipoValidacion?: string;
  
    public comboOptions: ComboItem[] = [];
    indInternoExterno: number = 1; //Bandera para aprobaciones estatal e inst estatal
    tipoSeguimiento: number = 0; //Bandera para switchear entre pantallas de Facturación e aprobacion Bienestar Central 3) Aprbacion 4)Facturacion 5)Nuevo registro 6)Consulta rechazados
    public ROL = ROL;
  
    constructor(
      private tokenSesionService: TokenSesionService,
      private router: Router,
      private alertaService: AlertaService,
      private modalDialogService: ModalDialogService,
    ) {}
  
  <<<<<<< HEAD
      public comboOptions: ComboItem[] = [];
      indInternoExterno : number = 1;   //Bandera para aprobaciones estatal e inst estatal
      tipoSeguimiento : number = 0;     //Bandera para switchear entre pantallas de Facturación e aprobacion Bienestar Central 3) Aprbacion 4)Facturacion 5)Nuevo registro 6)Consulta rechazados
      public ROL = ROL;
  
      public rutaOcultar:boolean=false;
  
      constructor(
          private tokenSesionService: TokenSesionService,
          private router: Router,
          private alertaService: AlertaService
      ) {}
  
      getInicialesUsuario(usuario: UsuarioSesion): string {
          const iniciales = (usuario.nombre ? usuario.nombre.charAt(0) : '') + (usuario.apellidoPaterno ? usuario.apellidoPaterno.charAt(0) : '');
          return iniciales.toUpperCase();
      }
  
      ngOnInit(): void {
        console.log("ruta",this.router.url);      
        if(this.router.url=='/privado/seguimiento/consulta-detalle'){
        this.rutaOcultar=true;
         
        }
        if(this.tipoValidacion && this.tipoValidacion == 'Aprobaciones')  {
          this.guardarIdSesion(this.indInternoExterno);
          this.comboOptions = [
            {key:1, value:"Aprobaciones interno"},
            {key:2, value:"Aprobaciones externas"},
          ];
        }
  
        if(this.tipoValidacion && this.tipoValidacion == 'Facturacion')  {
          this.tipoSeguimiento = 3;
          this.comboOptions = [
            {key:3, value:"Aprobación de folios"},
            {key:4, value:"Reportes RIMN"},
          ];
        }
  
        if(this.usuarioSesion.roles[0].idRol == ROL.Registro)  {
          this.tipoSeguimiento = 5;
          this.comboOptions = [
            {key:5, value:"Nuevo Registro"},
            {key:6, value:"Registros Rechazados"},
          ];
        }
      }
  
      
  
      cerrarSesion() {
          this.router.navigate(['']);
      }
  
      public valorSesion() {
        this.guardarIdSesion(this.indInternoExterno);
  
        this.alertaService.mostrar(TipoAlerta.Precaucion,'¡Error!', MENSAJES_ERROR.filtroAprbacion , false)
      }
  
      public guardarIdSesion(indInternoExterno: number) {
        idStore.update(state => ({
            ...state,
            id:indInternoExterno
        }));
  =======
    getInicialesUsuario(usuario: UsuarioSesion): string {
      const iniciales =
        (usuario.nombre ? usuario.nombre.charAt(0) : '') +
        (usuario.apellidoPaterno ? usuario.apellidoPaterno.charAt(0) : '');
      return iniciales.toUpperCase();
  >>>>>>> menuHamburger
    }
  
    ngOnInit(): void {
      if (this.tipoValidacion && this.tipoValidacion == 'Aprobaciones') {
        this.guardarIdSesion(this.indInternoExterno);
        this.comboOptions = [
          { key: 1, value: 'Aprobaciones interno' },
          { key: 2, value: 'Aprobaciones externas' },
        ];
      }
  
      if (this.tipoValidacion && this.tipoValidacion == 'Facturacion') {
        this.tipoSeguimiento = 3;
        this.comboOptions = [
          { key: 3, value: 'Aprobación de folios' },
          { key: 4, value: 'Reportes RIMN' },
        ];
      }
  
      if (this.usuarioSesion.roles[0].idRol == ROL.Registro) {
        this.tipoSeguimiento = 5;
        this.comboOptions = [
          { key: 5, value: 'Nuevo Registro' },
          { key: 6, value: 'Registros Rechazados' },
        ];
      }
      console.log(this.usuarioSesion.roles[0]);
    }
  
    consultarVigencia() {
      window.location.reload();
      this.router.navigate([RUTA.PRIVADO.REGISTRO_CURP]);
    }
    atencionesRechazadas() {
      window.location.reload();
      this.router.navigate([RUTA.PRIVADO.CONSULTA_RECHAZOS]);
    }
    aprobacionFolios() {
      window.location.reload();
      this.router.navigate([RUTA.PRIVADO.APROBACION_FOLIOS_CENTRAL]);
    }
    reportesRIMN() {
      window.location.reload();
      this.router.navigate([RUTA.PRIVADO.FACTURACION_RIMN]);
    }
    cerrarSesion() {
      this.router.navigate(['']);
    }
  
    public valorSesion() {
      this.guardarIdSesion(this.indInternoExterno);
  
      this.alertaService.mostrar(
        TipoAlerta.Precaucion,
        '¡Error!',
        MENSAJES_ERROR.filtroAprbacion,
        false,
      );
    }
  
    public guardarIdSesion(indInternoExterno: number) {
      idStore.update((state) => ({
        ...state,
        id: indInternoExterno,
      }));
    }
  
    public routerNav() {
      console.log('tipoSeguimiento', this.tipoSeguimiento);
      switch (this.tipoSeguimiento) {
        case 3:
          this.router.navigate([RUTA.PRIVADO.APROBACION_FOLIOS_CENTRAL]);
          break;
  
        case 4:
          this.router.navigate([RUTA.PRIVADO.FACTURACION_RIMN]);
          break;
  
        case 5:
          this.router.navigate([RUTA.PRIVADO.REGISTRO_CURP]);
          break;
  
        case 6:
          this.router.navigate([RUTA.PRIVADO.CONSULTA_RECHAZOS]);
          break;
      }
    }
    public redireccionamiento(tipo: string) {
      const dialogInstance = this.modalDialogService.openDialog(
        'Atención',
        MENSAJES_INFORMATIVOS.cambiarVista,
        true,
        true,
        false,
        TIPO_MODAL.INFO,
        true,
        'confirmacionSalir',
      );
      dialogInstance.aceptarEvent.subscribe(() => {
        switch (tipo) {
          case 'folios':
            this.router.navigate([this.RUTA.PRIVADO.APROBACION_FOLIOS_CENTRAL]);
            break;
          case 'vigencia':
            this.router.navigate([this.RUTA.PRIVADO.REGISTRO_CURP]);
            break;
          case 'rechazadas':
            this.router.navigate([this.RUTA.PRIVADO.CONSULTA_RECHAZOS]);
            break;
          case 'reportes':
            this.router.navigate([this.RUTA.PRIVADO.FACTURACION_RIMN]);
        }
      });
    }
    rutaActual(route: string): boolean {
      // Compara la ruta actual de la página con la ruta proporcionada
      return location.pathname.includes(route);
    }
    public cerrar() {
      const dialogInstance = this.modalDialogService.openDialog(
        'Atención',
        MENSAJES_INFORMATIVOS.cambiarVista,
        true,
        true,
        false,
        TIPO_MODAL.INFO,
        true,
        'confirmacionSalir',
      );
      dialogInstance.aceptarEvent.subscribe(() => {
        this.cerrarSesion();
      });
    }
  }
  