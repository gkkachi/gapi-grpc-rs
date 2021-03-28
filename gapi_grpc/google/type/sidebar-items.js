initSidebarItems({"enum":[["CalendarPeriod","A `CalendarPeriod` represents the abstract concept of a time period that has a canonical start. Grammatically, \"the start of the current `CalendarPeriod`.\" All calendar times begin at midnight UTC."],["DayOfWeek","Represents a day of the week."],["Month","Represents a month in the Gregorian calendar."]],"mod":[["date_time",""],["phone_number",""]],"struct":[["Color","Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript."],["Date","Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:"],["DateTime","Represents civil time (or occasionally physical time)."],["Decimal","A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal."],["Expr","Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec."],["Fraction","Represents a fraction in terms of a numerator divided by a denominator."],["Interval","Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive)."],["LatLng","An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges."],["LocalizedText","Localized variant of a text in a particular language."],["Money","Represents an amount of money with its currency type."],["PhoneNumber","An object representing a phone number, suitable as an API wire format."],["PostalAddress","Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains)."],["Quaternion","A quaternion is defined as the quotient of two directed lines in a three-dimensional space or equivalently as the quotient of two Euclidean vectors (https://en.wikipedia.org/wiki/Quaternion)."],["TimeOfDay","Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are [google.type.Date][google.type.Date] and `google.protobuf.Timestamp`."],["TimeZone","Represents a time zone from the IANA Time Zone Database."]]});