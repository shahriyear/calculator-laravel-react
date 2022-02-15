<?php

namespace App\Service;

use Exception;

class Calculator
{
    private $firstNumber;
    private $secondNumber;

    public function __construct($firstNumber, $secondNumber)
    {
        $this->firstNumber = $firstNumber;
        $this->secondNumber = $secondNumber;
    }

    public function calculate($operator)
    {
        switch ($operator) {
            case 'add':
                return $this->addition();
            case 'sub':
                return  $this->subtraction();
            case 'mul':
                return $this->multiplication();
            case 'div':
                return $this->division();
        }
    }

    public function addition()
    {
        return $this->firstNumber + $this->secondNumber;
    }

    public function subtraction()
    {
        return $this->firstNumber - $this->secondNumber;
    }

    public function multiplication()
    {
        return $this->firstNumber * $this->secondNumber;
    }

    public function division()
    {
        if ($this->secondNumber <= 0) {
            throw new Exception('Second Number should be grater then 0');
        }

        return $this->firstNumber / $this->secondNumber;
    }
}
