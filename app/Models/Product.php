<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['category'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['category'] ?? false, fn ($query, $category) =>
            $query->whereHas('category', fn ($query) =>
            $query->where('slug', $category))
        );

        $query->when($filters['min'] ?? false, fn ($query, $min) =>
            $query->where('price', '>=', $min));
        $query->when($filters['max'] ?? false, fn ($query, $max) =>
            $query->where('price', '<=', $max));
    }
}
