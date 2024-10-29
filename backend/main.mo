import Error "mo:base/Error";
import Text "mo:base/Text";

import Float "mo:base/Float";
import Debug "mo:base/Debug";

actor Calculator {
    public func calculate(x : Float, y : Float, op : Text) : async Float {
        switch (op) {
            case "+" { return x + y; };
            case "-" { return x - y; };
            case "*" { return x * y; };
            case "/" {
                if (y == 0) {
                    Debug.print("Error: Division by zero");
                    return 0;
                };
                return x / y;
            };
            case _ {
                Debug.print("Error: Invalid operator");
                return 0;
            };
        };
    };
}
