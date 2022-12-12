from django.urls import path
from .views import ITNewsletterSignUpView

urlpatterns = {
    path('newsletter-signup', ITNewsletterSignUpView.as_view()),
}