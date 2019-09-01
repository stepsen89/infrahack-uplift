import {Injectable} from '@angular/core';

import {Apollo, QueryRef} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private query: QueryRef<any>;

  constructor(
    private apollo: Apollo
  ) {
  }

  private queryString = gql`
      {
        stations (aggregation: "{\\"$match\\": {\\"$and\\": [{\\"lng\\": {\\"$ne\\": null}}, {\\"lat\\": {\\"$ne\\": null}}]}}") {
          edges {
            node {
              id
              name
              lng
              lat
              faults
              lifts
              avgRepair
              incidents {
                edges {
                  node {
                    incidentType
                    user
                  }
                }
            }
            }
          }
        }
    }`;

  public getLocations() {

    this.query = this.apollo.watchQuery({
      query: this.queryString,
      variables: {}
    });

    return this.query.valueChanges;
  }

}

