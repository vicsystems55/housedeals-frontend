import { createRouter, createWebHashHistory } from 'vue-router'

// import Home from '../views/Home.vue'

import About from '../views/General/About.vue'
import Blog from '../views/General/Blog.vue'
import BookingSuccess from '../views/General/BookingSuccess.vue'
import Contact from '../views/General/Contact.vue'
import Home from '../views/General/Home.vue'
import MarketPlace from '../views/General/MarketPlace.vue'
import Post from '../views/General/Post.vue'
import PropertyDetails from '../views/General/PropertyDetails.vue'


import AgentBookings from '../views/Agent/Bookings.vue'
import AgentDashboard from '../views/Agent/Dashboard.vue'
import AgentNotifications from '../views/Agent/Notifications.vue'

import CompanyOnboarding from '../views/Auth/CompanyOnboarding.vue'
import CompanyOnboardingSuccess from '../views/Auth/CompanyOnboardingSuccess.vue'
import ForgotPassword from '../views/Auth/ForgotPassword.vue'
import Login from '../views/Auth/Login.vue'
import UpdatePassword from '../views/Auth/UpdatePassword.vue'

import CompanyAgent from '../views/Company/Agent.vue'
import CompanyCreateAgent from '../views/Company/CreateAgent.vue'
import CompanyCreateListing from '../views/Company/CreateListing.vue'
import CompanyDashboard from '../views/Company/Dashboard.vue'
import CompanyListing from '../views/Company/Listing.vue'
import CompanyListings from '../views/Company/Listings.vue'
import CompanyNotifications from '../views/Company/Notifications.vue'
import CompanySubscriptionPackages from '../views/Company/SubscriptionPackages.vue'
import CompanySubscriptionSuccess from '../views/Company/SubscriptionSuccess.vue'
import CompanyProfile from '../views/Company/Profile.vue'

import BlogPosts from '../views/Superadmin/BlogPosts.vue'
import SuperadminCompanyProfile from '../views/Superadmin/CompanyProfile.vue'
import SuperadminCompanyProfiles from '../views/Superadmin/CompanyProfiles.vue'
import SuperadminCreateAgent from '../views/Superadmin/CreateAgent.vue'
import SuperadminCreateCompanyProfile from '../views/Superadmin/CreateCompanyProfile.vue'
import SuperadminCreatePost from '../views/Superadmin/CreatePost.vue'
import SuperadminDashboard from '../views/Superadmin/Dashboard.vue'
import SuperadminListings from '../views/Superadmin/Listings.vue'
import SuperadminListing from '../views/Superadmin/Listing.vue'
import SuperadminNotifications from '../views/Superadmin/Notifications.vue'
import SuperadminUpdatePost from '../views/Superadmin/UpdatePost.vue'


import MainLayout from '../views/Layouts/MainLayout.vue'

import Loginx from '../views/Auth/Login.vue'








const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: 
        [

          {
            path: '/login',
            component: Loginx,
          },

          {
            path: '',
            component: Home,
          },

          {
            path: '/about',
            component: About,
          },

          {
            path: '/market-place',
            component: MarketPlace,
          },

          {
            path: '/property-details',
            component: PropertyDetails,
          },

          {
            path: '/booking-success',
            component: BookingSuccess,
          },

          {
            path: '/contact',
            component: Contact,
          },

          {
            path: '/blog',
            component: Blog,
          },

          {
            path: '/post',
            component: Post,
          },

          {
            path: '/company-onboarding',
            component: CompanyOnboarding,
          },

          {
            path: '/company-onboarding-success',
            component: CompanyOnboardingSuccess,
          },

          {
            path: '/forgot-password',
            component: ForgotPassword,
          },

          {
            path: '/login',
            component: Login,
          },

          {
            path: '/update-password',
            component: UpdatePassword,
          },

          {
            path: '/company/agent',
            component: CompanyAgent,
          },

          {
            path: '/company/create-agent',
            component: CompanyCreateAgent,
          },

          {
            path: '/company/create-listing',
            component: CompanyCreateListing,
          },

          {
            path: '/company',
            component: CompanyDashboard,
          },

          {
            path: '/company/listing',
            component: CompanyListing,
          },

          {
            path: '/company/listings',
            component: CompanyListings,
          },

          {
            path: '/company/notifications',
            component: CompanyNotifications,
          },

          {
            path: '/company/subscription-packages',
            component: CompanySubscriptionPackages,
          },

          {
            path: '/company/subscription-success',
            component: CompanySubscriptionSuccess,
          },

          {
            path: '/company/profile',
            component: CompanyProfile,
          },

          {
            path: '/super-admin/blog-posts',
            component: BlogPosts,
          },

          {
            path: '/super-admin/company-profiles',
            component: SuperadminCompanyProfiles,
          },

          {
            path: '/super-admin/company-profile',
            component: SuperadminCompanyProfile,
          },

          {
            path: '/super-admin/create-agent',
            component: SuperadminCreateAgent,
          },

          {
            path: '/super-admin/create-company-profile',
            component: SuperadminCreateCompanyProfile,
          },


          {
            path: '/super-admin/create-post',
            component: SuperadminCreatePost,
          },

          {
            path: '/super-admin',
            component: SuperadminDashboard,
          },

          {
            path: '/super-admin/listings',
            component: SuperadminListings,
          },

          {
            path: '/super-admin/listing',
            component: SuperadminListing,
          },

          {
            path: '/super-admin/notifications',
            component: SuperadminNotifications,
          },

          {
            path: '/super-admin/update-post',
            component: SuperadminUpdatePost,
          },

          {
            path: '/agent',
            component: AgentDashboard,
          },

          {
            path: '/agent/bookings',
            component: AgentBookings,
          },

          {
            path: '/agent/notifications',
            component: AgentNotifications,
          },

          

        ]
  },
  {
    path: '/xb',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
