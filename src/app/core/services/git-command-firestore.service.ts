import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  updateDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {GitCommand} from "../../intefaces/GitCommand";

@Injectable({
  providedIn: 'root'
})
export class GitCommandFirestoreService {
  private readonly gitCommandCollection: CollectionReference;
  constructor(private readonly firestore: Firestore) {
    this.gitCommandCollection = collection(this.firestore,
      'command');
  }

  getAll() {
    return collectionData(this.gitCommandCollection, {
      idField: 'id'
    }) as Observable<GitCommand[]>
  }

  create(command: GitCommand){
    return addDoc(this.gitCommandCollection, command);
  }

  update(gitCommand: GitCommand) {
    const pokemonDocumentReference = doc(
      this.firestore,
      `command/${gitCommand.id}`
    );
    return updateDoc(pokemonDocumentReference, { ...gitCommand });
  }

  delete(id: string) {
    const pokemonDocumentReference = doc(this.firestore, `command/${id}`);
    return deleteDoc(pokemonDocumentReference);
  }
}
