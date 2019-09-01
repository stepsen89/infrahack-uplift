import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const mutationString = gql`
      mutation insertIncident($id: String!, $user: String, $incidentType: String){
        insertIncident(id: $id, user: $user, incidentType: $incidentType) {
          ok
        }
  }`;

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {

  constructor(
    private apollo: Apollo
  ) {}

  public sendReport(id: string) {

    this.apollo.mutate({
      mutation: mutationString,
      variables: {
        id: id,
        user: 'testuser',
        incidentType: 'testIncident'
      }
    }).subscribe(data => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });

  }
}
