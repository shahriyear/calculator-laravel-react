<?php

namespace App\Http\Controllers;

use App\Service\Calculator;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CalculatorController extends Controller
{
    public function calculator(Request $request)
    { 
        $firstNumber = $request->firstNumber;
        $secondNumber = $request->secondNumber;
        $operator = $request->operator;

        $calculator = new Calculator($firstNumber, $secondNumber);

        try {
            $result = $calculator->calculate($operator);
            return response()->json(['result' => $result], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json(['result' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
