import {
  animate,state,style,transition,trigger,query} from "@angular/animations";
//import { query } from "@angular/core/src/animation/dsl";//NÃO Importar Daqui!!!!!!!!!!

export let todosAnimations = trigger("todosAnimations",[
  transition(":enter",[ query("h1",[style({transform: "translateY(-80px)"}), animate(1500)])
  //no Query(...) podemos passar um classe do css, ou #Id ou Tag ex: h1
  ]),
]);
export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })), /// substitui o necessidade de por o STYLE({ opacity: 0 }) em outro lugares
  transition("void => *, * => void", [
    /// "* => void" substitui a segunda opção do TRANSITION(..), Ou 'void <=> *'//Bidirecional
    animate(2000, style({ backgroundColor: "white", opacity: 1 })),
  ]),
]);

export let slide = trigger("slide", [
  transition(":enter", [ //nas versões mais novas do Angular, temos que substituir o void por : Enter or : Leave
    style({ transform: "translateX(-10px)" }),
    animate(2000),
  ]),
  transition(":leave", [
    style({ transform: "translateX(-100%)" }),
    animate(1000),
  ]),
]);
