import { Pipe, PipeTransform } from '@angular/core';

interface ITodo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Array<ITodo>, filteredStatus: string): Array<ITodo> {
    if (filteredStatus === '') {
      return todos;
    }

    let resultArray = [];
    for (let todo of todos) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }

    return resultArray;
  }
}
