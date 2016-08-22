<?php

namespace App\Http\Requests;

class SettingsUpdateRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'zone_default.mname'        => 'required|string',
            'zone_default.rname'        => 'required|email',
            'zone_default.refresh'      => 'required|integer',
            'zone_default.retry'        => 'required|integer',
            'zone_default.expire'       => 'required|integer',
            'zone_default.negative_ttl' => 'required|integer|min:0|max:2147483647',
            'zone_default.default_ttl'  => 'required|integer|min:0|max:2147483647',
        ];
    }
}
