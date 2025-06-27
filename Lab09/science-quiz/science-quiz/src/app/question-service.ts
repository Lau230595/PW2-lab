import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions = [
    { question: '¿Cuál es la fórmula química del agua?', options: ['H2O', 'CO2', 'NaCl'], correctAnswer: 'H2O' },
    { question: '¿Cuál es la ley de Newton que describe la acción y la reacción?', options: ['Primera ley', 'Segunda ley', 'Tercera ley'], correctAnswer: 'Tercera ley' },
    { question: '¿Cuál es el planeta más grande del sistema solar?', options: ['Marte', 'Júpiter', 'Saturno'], correctAnswer: 'Júpiter' },
    { question: '¿Cuál es el hueso más largo del cuerpo humano?', options: ['Fémur', 'Húmero', 'Tibia'], correctAnswer: 'Fémur' },
    { question: '¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía?', options: ['Fotosíntesis', 'Respiración', 'Transpiración'], correctAnswer: 'Fotosíntesis' },
    { question: '¿Cuál es la unidad básica de los ácidos nucleicos?', options: ['Aminoácido', 'Nucleótido', 'Glucosa'], correctAnswer: 'Nucleótido' },
    { question: '¿Cuál es la velocidad de la luz en el vacío?', options: ['300,000 km/s', '150,000 km/s', '100,000 km/s'], correctAnswer: '300,000 km/s' },
    { question: '¿Qué elemento tiene el símbolo Fe?', options: ['Hierro', 'Plomo', 'Zinc'], correctAnswer: 'Hierro' },
    { question: '¿Qué tipo de energía se produce en una fusión nuclear?', options: ['Térmica', 'Solar', 'Nuclear'], correctAnswer: 'Nuclear' },
    { question: '¿Qué órgano filtra la sangre y elimina desechos?', options: ['Riñón', 'Hígado', 'Pulmón'], correctAnswer: 'Riñón' },
    { question: '¿Quién descubrió la ley de la gravitación universal?', options: ['Einstein', 'Newton', 'Galileo'], correctAnswer: 'Newton' }
  ];

  getQuestions() {
    return this.questions;
  }
}
