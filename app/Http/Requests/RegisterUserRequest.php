<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'contact_number' => 'required|numeric',
            'role' => 'required',
            'date_of_birth' => ['required', 'date', function ($attribute, $value, $fail) {
                $birthday = Carbon::parse($value);
                $age = $birthday->age;
                if ($age < 18) {
                    $fail('you must be at least 18 years old');
                }
            }],
            'email' => 'required',
            'password' => 'required|min:8'

        ];
    }
}
