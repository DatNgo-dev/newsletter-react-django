# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


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

        return Response(
            {'success': "Contact added to newsletter email list"},
            status=status.HTTP_200_OK
        )
