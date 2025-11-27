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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('product_id')->constrained();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('company_name')->nullable();
            $table->string('street_name');
            $table->string('apartment')->nullable();
            $table->string('town');
            $table->integer('zip_code');
            $table->string('contact_number', 20)->nullable();
            $table->string('email');
            $table->text('note')->nullable();
            $table->enum('delivery_type', ['cod', 'walk-in']);
            $table->decimal('total', 10, 2);
            $table->enum('status', ['pending', 'preparing', 'completed', 'cancelled', 'failed'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
