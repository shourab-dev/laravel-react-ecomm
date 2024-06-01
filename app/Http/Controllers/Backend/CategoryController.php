<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Traits\SlugGenerator;
use App\Traits\Trait\MediaUploader;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use SlugGenerator, MediaUploader;
    function index()
    {
        $categories = Category::with('subCategories')->where('category_id',null)->select('id', 'title', 'slug', 'status', 'icon')->paginate(20);
        
        return inertia('Backend/Category', [
            'categories' => $categories
        ]);
    }

    function storeOrUpdate(Request $request, $id = null)
    {

        $request->validate([
            'title' => 'required|min:3'
        ]);


        $category = Category::findOrNew($id);
        $category->title = $request->title;
        $category->category_id = $request->parentId ?? $category->category_id;
        $category->slug = !$id ? $this->generateSlug($request->title, Category::class) : $category->slug;
        $category->icon = $request->hasFile('icon') ? $this->uploadSingleMedia($request->icon, $category->slug, $category->icon, 'categories') : $category->icon;
        $category->save();
        return to_route('admin.category.index');
    }

    function toggleStatus($id)
    {
        $category = Category::find($id);
        $category->status = !$category->status;
        $category->save();
        return to_route('admin.category.index');
    }
    function deleteCategory($id)
    {
        Category::findOrFail($id)->delete();
    }
}
