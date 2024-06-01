<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('brand_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('slug')->unique();
            $table->boolean('stock')->default(true);
            $table->float('price')->nullable();
            $table->float('sell_price')->nullable();
            $table->string('featured_img')->nullable();
            $table->mediumText('short_detail')->nullable();
            $table->longText('long_detail')->nullable();
            $table->boolean('status')->default(true);
            $table->boolean('featured')->default(false);
            $table->string('sku')->nullable();
            $table->json('cross_sell')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
