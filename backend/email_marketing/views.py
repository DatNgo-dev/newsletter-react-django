import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

activeCampaignUrl = settings.ACTIVE_CAMPAIGN_URL
activeCampaignKey = settings.ACTIVE_CAMPAIGN_KEY


# Create your views here.
class ITNewsletterSignUpView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        first_name = data['first_name']
        email = data['email']
        agree = data['agree']

        try:
            agree = bool(agree)
        except:
            return Response(
                {'error': "Must agree to Privacy Policy and Terms of Service"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not agree:
            return Response(
                {'error': "Must agree to Privacy Policy and Terms of Service"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # create a new contact
        url = activeCampaignUrl + "/api/3/contact/sync"
        data = {
            "contact": {
                "email": email,
                "firstName": first_name,
            }
        }

        headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Api-Token': activeCampaignKey,
        }

        response = requests.post(url, json=data, headers=headers)

        if response.status_code != 201 and response.status_code != 200:
            return Response(
                {'error': 'Something went wrong when creating contact'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        contact = response.json()

        try:
            contactID = str(contact['contact']['id'])
        except:
            return Response(
                {'error': 'Something went wrong when getting contact ID'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # add tag to new contact
        url = activeCampaignUrl + '/api/3/contactTags'
        data = {
            "contactTag": {
                "contact": contactID,
                "tag": '2',
            }
        }

        response = requests.post(url, json=data, headers=headers)

        if response.status_code != 201 and response.status_code != 200:
            return Response(
                {'error': 'Something went wrong when add tag to contact'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # add to master list
        url = activeCampaignUrl + '/api/3/contactLists'
        data = {
            "contactList": {
                "list": '1',
                "contact": contactID,
                "status": '1'
            }
        }

        response = requests.post(url, json=data, headers=headers)

        if response.status_code != 201 and response.status_code != 200:
            return Response(
                {'error': 'Something went wrong when add contact to master list'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        data = {
            "contactList": {
                "list": '2',
                "contact": contactID,
                "status": '1'
            }
        }

        response = requests.post(url, json=data, headers=headers)

        if response.status_code != 201 and response.status_code != 200:
            return Response(
                {'error': 'Something went wrong when add contact to newsletter list'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        else:
            return Response(
                {'success': "Contact added to newsletter email list"},
                status=status.HTTP_200_OK
            )
