<?php

namespace App\Traits\Trait;

use Illuminate\Support\Facades\Storage;

trait MediaUploader
{
    function uploadSingleMedia($file = null, $title = null, $old = null, $dir = 'others', $visibility = 'public')
    {
        if ($file) {

            if ($old) {
                $old = str($old)->replace('storage/', '');
                Storage::disk($visibility)->delete($old);
            }


            $media = null;
            if ($title) {
                $extension = $file->getClientOriginalExtension();
                $fileName = $title  . '.' . $extension;
                $media = $file->storeAs($dir, $fileName, $visibility);
            } else {

                $media = $file->store($dir, $visibility);
            }
            if ($visibility == 'public') {
                $media = 'storage/' . $media;
            }
            return $media;
        }
    }

    function deleteMedia($old, $visibility = 'public')
    {
        $old = str($old)->replace('storage/', '');
        Storage::disk($visibility)->delete($old);
    }
}
