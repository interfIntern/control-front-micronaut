import { NativeDateAdapter, MatDateFormats } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return formatDate(date, 'yyyy-MM-dd', this.locale);;
        } else {
            return date.toDateString();
        }
  }
};

export const APP_DATE_FORMATS = {
    parse: {
        dateInput: { year: 'numeric', month: 'short', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: {
            year: 'numeric', month: 'long', day: 'numeric'
        },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
}