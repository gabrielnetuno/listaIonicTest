import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(

    private activateRoute: ActivatedRoute,
    private router: Router

  ) { }

  routeId = null;
  produto: any = {};

  ngOnInit() {

    this.routeId = this.activateRoute.snapshot.params['id']
    //if (this.routeId) {
    //  this.banco.getOneItem(this.routeId).subscribe(caixa => { this.produto = caixa });
    //}
  }
  //update(form: any) {
    //this.banco.updateItem(form.value, this.routeId);
    //this.router.navigate[''];
    //this.util.tostando("item atualizado com sucesso", "middie", 2000, "medium");
    //declations: [FormPage]
  //}
}
