import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-nuevo-problema',
  templateUrl: './reportar-nuevo-problema.component.html',
  styleUrls: ['./reportar-nuevo-problema.component.css']
})
export class ReportarNuevoProblemaComponent {
  error: boolean = false;

  createReportForm = this.formBuilder.group({
    problema:['', Validators.required],
    descripcion:['', Validators.required],
    localizacion:['', Validators.required],
    pic:[''],
    correo:[''],
    sms:['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {

  }

  addReport() {
    if(this.createReportForm.invalid) this.error = true;
    if(this.createReportForm.invalid) return;

    let problema = this.createReportForm.get('problema')?.value;
    let descripcion = this.createReportForm.get('descripcion')?.value;
    let localizacion = this.createReportForm.get('localizacion')?.value;
    let pic = this.createReportForm.get('pic')?.value;
    let correo = this.createReportForm.get('correo')?.value;
    let sms = this.createReportForm.get('sms')?.value;

    let newReport = {problema, descripcion, localizacion, pic, correo, sms};

    // this.report_service.addReport(newReport);

    this.router.navigate(['/reportfinal']);
  }
}
