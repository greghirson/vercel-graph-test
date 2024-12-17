
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-17 02:00:00", "b": 457.0}, {"a": "2024-12-17 02:05:00", "b": 447.0}, {"a": "2024-12-17 02:10:00", "b": 444.75}, {"a": "2024-12-17 02:15:00", "b": 446.2}, {"a": "2024-12-17 02:20:00", "b": 444.0}, {"a": "2024-12-17 02:25:00", "b": 427.4}, {"a": "2024-12-17 02:30:00", "b": 425.0}, {"a": "2024-12-17 02:35:00", "b": 430.0}, {"a": "2024-12-17 02:40:00", "b": 426.25}, {"a": "2024-12-17 02:45:00", "b": 423.6666666666667}, {"a": "2024-12-17 02:50:00", "b": 420.0}, {"a": "2024-12-17 02:55:00", "b": 434.0}, {"a": "2024-12-17 03:00:00", "b": 440.2}, {"a": "2024-12-17 03:05:00", "b": 439.5}, {"a": "2024-12-17 03:10:00", "b": 443.4}, {"a": "2024-12-17 03:15:00", "b": 430.8}, {"a": "2024-12-17 03:20:00", "b": 423.0}, {"a": "2024-12-17 03:25:00", "b": 428.2}, {"a": "2024-12-17 03:30:00", "b": 420.0}, {"a": "2024-12-17 03:35:00", "b": 415.25}, {"a": "2024-12-17 03:40:00", "b": 424.3333333333333}, {"a": "2024-12-17 03:45:00", "b": 417.4}, {"a": "2024-12-17 03:50:00", "b": 411.0}, {"a": "2024-12-17 03:55:00", "b": 417.6666666666667}, {"a": "2024-12-17 04:00:00", "b": 419.0}, {"a": "2024-12-17 04:05:00", "b": 413.0}, {"a": "2024-12-17 04:10:00", "b": 419.3333333333333}, {"a": "2024-12-17 04:15:00", "b": 419.25}, {"a": "2024-12-17 04:20:00", "b": 407.3333333333333}, {"a": "2024-12-17 04:25:00", "b": 459.8}, {"a": "2024-12-17 04:30:00", "b": 488.4}, {"a": "2024-12-17 04:35:00", "b": 471.8}, {"a": "2024-12-17 04:40:00", "b": 456.4}, {"a": "2024-12-17 04:45:00", "b": 429.4}, {"a": "2024-12-17 04:50:00", "b": 425.0}, {"a": "2024-12-17 04:55:00", "b": 433.2}, {"a": "2024-12-17 05:00:00", "b": 437.5}, {"a": "2024-12-17 05:05:00", "b": 426.8}, {"a": "2024-12-17 05:10:00", "b": 417.0}, {"a": "2024-12-17 05:15:00", "b": 444.8}, {"a": "2024-12-17 05:20:00", "b": 640.2}, {"a": "2024-12-17 05:25:00", "b": 629.8}, {"a": "2024-12-17 05:30:00", "b": 433.2}, {"a": "2024-12-17 05:35:00", "b": 427.0}, {"a": "2024-12-17 05:40:00", "b": 425.5}, {"a": "2024-12-17 05:45:00", "b": 421.4}, {"a": "2024-12-17 05:50:00", "b": 424.8}, {"a": "2024-12-17 05:55:00", "b": 426.8}, {"a": "2024-12-17 06:00:00", "b": 429.0}, {"a": "2024-12-17 06:05:00", "b": 422.6666666666667}, {"a": "2024-12-17 06:10:00", "b": 418.0}, {"a": "2024-12-17 06:15:00", "b": 412.0}, {"a": "2024-12-17 06:20:00", "b": 408.5}, {"a": "2024-12-17 06:25:00", "b": 408.3333333333333}, {"a": "2024-12-17 06:30:00", "b": 413.75}, {"a": "2024-12-17 06:35:00", "b": 416.2}, {"a": "2024-12-17 06:40:00", "b": 405.25}, {"a": "2024-12-17 06:45:00", "b": 404.25}, {"a": "2024-12-17 06:50:00", "b": 411.0}, {"a": "2024-12-17 06:55:00", "b": 430.0}, {"a": "2024-12-17 07:00:00", "b": 455.0}, {"a": "2024-12-17 07:05:00", "b": 496.0}, {"a": "2024-12-17 07:10:00", "b": 529.8}, {"a": "2024-12-17 07:15:00", "b": 525.25}, {"a": "2024-12-17 07:20:00", "b": 538.6}, {"a": "2024-12-17 07:25:00", "b": 612.2}, {"a": "2024-12-17 07:30:00", "b": 625.6}, {"a": "2024-12-17 07:35:00", "b": 610.5}, {"a": "2024-12-17 07:40:00", "b": 610.75}, {"a": "2024-12-17 07:45:00", "b": 629.2}, {"a": "2024-12-17 07:50:00", "b": 631.0}, {"a": "2024-12-17 07:55:00", "b": 642.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    