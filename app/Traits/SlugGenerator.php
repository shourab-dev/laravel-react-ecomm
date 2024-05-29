<?php

namespace App\Traits;

trait SlugGenerator
{
    public function generateSlug($title, $modal, )
    {
        
        $slug = str()->slug($title);

        $count = $modal::where('slug', 'LIKE','%'. $slug. '%' )->count();
        if ($count > 0) {
            $slug = $slug . '-' . $count;
        }
        return $slug;
    }
}
