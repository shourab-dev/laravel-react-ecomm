<?php

namespace App\Traits\Traits;

trait StatusUpdate
{
    function toggleStatus($model, $id, $redirect = null)
    {
        $DBModel = $model::find($id);
        $DBModel->status = !$DBModel->status;
        $DBModel->save();
        if ($redirect) {
            return to_route($redirect);
            exit();
        }
        return back();
    }
}
