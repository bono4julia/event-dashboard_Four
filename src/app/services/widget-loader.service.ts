import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { WidgetResponse } from '../models/widgets-response';

@Injectable()
export class WidgetsLoaderService {

  constructor(
    private http: Http
  ) { }

  getWidgets(): Promise<WidgetResponse> {

  return Promise.resolve(<WidgetResponse>{  

  "widgets": [{
            "label": "Company Information",
            "position": 1,
            "group": "leftblock",
            "schema": [{
                    "fieldname": "clientName",
                    "label": "Client"
                }, {
                    "fieldname": "clientDivision",
                    "label": "Client's Division"
                }, {
                    "fieldname": "clientSiteId",
                    "label": "Client's Division Site"
                }, {
                    "fieldname": "clientContactFullName",
                    "label": "Client Contact"
                }, {
                    "fieldname": "clientContactId",
                    "label": "Client Billing Contact"
                }, {
                    "fieldname": "additionalClientContacts",
                    "label": "Additional Client Contacts"
                }, {
                    "fieldname": "supplierDivision",
                    "label": "Supplier's Division"
                }, {
                    "fieldname": "supplierSiteId",
                    "label": "Supplier's Division Site"
                }, {
                    "fieldname": "supplierContactFullName",
                    "label": "Supplier Contact"
                }, {
                    "fieldname": "additionalSupplierContacts",
                    "label": "Additional Supplier Contacts"
                }
            ],
            "data": null
        }, {
            "label": "Timeline",
            "position": 0,
            "group": "rightblock",
            "schema": [{
                    "fieldname": "eventState",
                    "label": "Event Status"
                }, {
                    "fieldname": "assignDate",
                    "label": "Assign Date"
                }, {
                    "fieldname": "confirmedDate",
                    "label": "Confirmed Date"
                }, {
                    "fieldname": "clientTargetDate",
                    "label": "Target Date"
                }, {
                    "fieldname": "duration",
                    "label": "Duration (days)"
                }, {
                    "fieldname": "isDurationBusinessDays",
                    "label": "Is Duration Business Days?"
                }, {
                    "fieldname": "activityCompletedDate",
                    "label": "Activity Completed Date"
                }, {
                    "fieldname": "reviewedDate",
                    "label": "Reviewed Date"
                }, {
                    "fieldname": "deliveredDate",
                    "label": "Delivered Date"
                }, {
                    "fieldname": "closedDate",
                    "label": "Closed Date"
                }
            ],
            "data": null
        }, {
            "label": "Internal Information",
            "position": 0,
            "group": "leftblock",
            "schema": [{
                    "fieldname": "flid",
                    "label": "Event #"
                }, {
                    "fieldname": "eventType",
                    "label": "Event Type"
                }, {
                    "fieldname": "eventSubtype",
                    "label": "Subtype"
                }, {
                    "fieldname": "eventTypeSubtype",
                    "label": "Event Type / Subtype"
                }, {
                    "fieldname": "customerProgram",
                    "label": "Customer Program"
                }, {
                    "fieldname": "purchaseOrder",
                    "label": "Purchase Order"
                }, {
                    "fieldname": "srNumber",
                    "label": "Primary SR #"
                }, {
                    "fieldname": "additionalSrNumber",
                    "label": "Additional SR #"
                }, {
                    "fieldname": "clientReference",
                    "label": "Reference #"
                }, {
                    "fieldname": "batchReference",
                    "label": "Batch Reference"
                }, {
                    "fieldname": "expectedVolume",
                    "label": "Expected Volume"
                }, {
                    "fieldname": "supportingDocsNotificationEnabled",
                    "label": "Notify when supporting docs are uploaded"
                }, {
                    "fieldname": "isSQAPaidTravelExpenses",
                    "label": "SQA paid travel expenses"
                }, {
                    "fieldname": "inspectionResult",
                    "label": "Inspection Result"
                }, {
                    "fieldname": "isParent",
                    "label": "Parent?"
                }
            ],
            "data": null
        }
    ],
    "data": {
        "id": "80333a1f-1902-44d8-8675-27d699d7a0e1",
        "flid": 49597,
        "eventType": "Inspection",
        "eventState": "Proposed",
        "eventSubtype": "client inspection substype",
        "customerProgram": null,
        "purchaseOrder": "TBD",
        "srNumber": 1017.0,
        "additionalSrNumber": null,
        "clientReference": "",
        "batchReference": "166b4be1-22e4-47d3-80ac-18ba60c60c53",
        "expectedVolume": 889,
        "supportingDocsNotificationEnabled": "No",
        "isSQAPaidTravelExpenses": null,
        "inspectionResult": null,
        "isParent": null,
        "clientTargetDate": null,
        "assignDate": "2017-04-13T18:28:05.357",
        "confirmedDate": null,
        "duration": 0.0,
        "isDurationBusinessDays": "Business Days",
        "activityCompletedDate": null,
        "reviewedDate": null,
        "deliveredDate": null,
        "closedDate": null,
        "clientName": "01 - Client X",
        "clientDivision": "Division 1",
        "clientSiteId": null,
        "clientContactFullName": "NonBilling Contact",
        "clientContactId": "acdeb5db-040a-48b9-b784-2d45789544ce"
    }
  }
  )
  }
  }
  

   /* getWidgets(apiUrl: string): Promise<WidgetResponse> { 
  /*  return this.http.get(apiUrl)
      .toPromise()
      .then((response) => { 
          return response.json() as WidgetResponse
      }) 
    } */
