import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentificacionService } from "./services/identificacion/identificacion.service";
import { TelefonoService } from "./services/telefono/telefono.service";
import { NombreService } from "./services/nombre/nombre.service";
import { GuardsCheckStart } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarioForm: FormGroup;
  identificacion: any;

  constructor(
    public fb: FormBuilder,
    public identificacionService: IdentificacionService,
    public telefonoService: TelefonoService,
    public nombreService: NombreService
  ) {

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      identificacion: [' ', Validators.required],
      telefono: [' ', Validators.required],
      nombre: [' ', Validators.required]
    });;

    this.identificacionService.getAllidentificacion().subscribe(resp => {
      this.identificacion = resp;
      console.log(resp);

    },
      error => { console.error(error) }
    )

  }

  guardar(): void {

  }

}
