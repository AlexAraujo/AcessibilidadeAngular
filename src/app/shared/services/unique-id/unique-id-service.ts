import { Injectable } from "@angular/core";
import * as uuid from 'uuid'


@Injectable({ providedIn: 'root'})
export class UniqueIdService {

  genereteUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.genereteUniqueId();
    return `${prefix}-${uniqueId}`
  }

  private genereteUniqueId(): string {
    return uuid.v1();
  }
}
