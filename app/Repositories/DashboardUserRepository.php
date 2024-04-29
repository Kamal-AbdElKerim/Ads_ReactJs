<?php

namespace App\Repositories;

use App\Models\Ad;
use App\Models\Notification;
use Carbon\Carbon;
use App\Models\User;

class DashboardUserRepository
{
    public function Dashboard_user($userId)
    {
        $user = User::find($userId);

        $notifications = $user->notifications()
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($notification) {
                $notification->formatted_created_at = Carbon::parse($notification->created_at)->diffForHumans();
                return $notification;
            });

        $numAdsPending = Ad::where('UserID', $userId)->where('status', 'pending')->count();
        $numAdsApproved = Ad::where('UserID', $userId)->where('status', 'approved')->count();
        $numAdsSold = Ad::where('UserID', $userId)->where('status', 'sold')->count();

        $ads = Ad::with(['images'])
            ->where('UserID', $userId)
            ->where('status', 'sold')
            ->latest('created_at')
            ->limit(4)
            ->get();

        $data = [
            'notifications' => $notifications,
            'ads' => $ads,
            'num_ads_pending' => $numAdsPending,
            'num_ads_approved' => $numAdsApproved,
            'num_ads_sold' => $numAdsSold,
        ];

        return $data;
    }

    public function remove_notification($notificationId, $userId)
    {
        $notification = Notification::find($notificationId);

        if (!$notification) {
            return 'Notification not found.';
        }

        if ($userId !== $notification->user_id) {
            return 'You are not authorized to remove this notification.';
        }

        $notification->delete();

        return true;
    }
}
