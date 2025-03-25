
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-24 20:00:00", "b": 516.8}, {"a": "2025-03-24 20:05:00", "b": 459.0}, {"a": "2025-03-24 20:10:00", "b": 447.0}, {"a": "2025-03-24 20:15:00", "b": 452.25}, {"a": "2025-03-24 20:20:00", "b": 450.6}, {"a": "2025-03-24 20:25:00", "b": 445.6}, {"a": "2025-03-24 20:30:00", "b": 415.0}, {"a": "2025-03-24 20:35:00", "b": 427.2}, {"a": "2025-03-24 20:40:00", "b": 437.8}, {"a": "2025-03-24 20:45:00", "b": 439.6}, {"a": "2025-03-24 20:50:00", "b": 435.6}, {"a": "2025-03-24 20:55:00", "b": 434.3333333333333}, {"a": "2025-03-24 21:00:00", "b": 435.0}, {"a": "2025-03-24 21:05:00", "b": 455.4}, {"a": "2025-03-24 21:10:00", "b": 450.2}, {"a": "2025-03-24 21:15:00", "b": 421.75}, {"a": "2025-03-24 21:20:00", "b": 434.6}, {"a": "2025-03-24 21:25:00", "b": 435.6}, {"a": "2025-03-24 21:30:00", "b": 414.25}, {"a": "2025-03-24 21:35:00", "b": 406.0}, {"a": "2025-03-24 21:40:00", "b": 404.5}, {"a": "2025-03-24 21:45:00", "b": 406.0}, {"a": "2025-03-24 21:50:00", "b": 419.2}, {"a": "2025-03-24 21:55:00", "b": 441.8}, {"a": "2025-03-24 22:00:00", "b": 426.75}, {"a": "2025-03-24 22:05:00", "b": 440.2}, {"a": "2025-03-24 22:10:00", "b": 446.8}, {"a": "2025-03-24 22:15:00", "b": 413.75}, {"a": "2025-03-24 22:20:00", "b": 404.25}, {"a": "2025-03-24 22:25:00", "b": 404.0}, {"a": "2025-03-24 22:30:00", "b": 429.8}, {"a": "2025-03-24 22:35:00", "b": 425.6}, {"a": "2025-03-24 22:40:00", "b": 429.2}, {"a": "2025-03-24 22:45:00", "b": 438.5}, {"a": "2025-03-24 22:50:00", "b": 433.2}, {"a": "2025-03-24 22:55:00", "b": 433.5}, {"a": "2025-03-24 23:00:00", "b": 423.0}, {"a": "2025-03-24 23:05:00", "b": 427.4}, {"a": "2025-03-24 23:10:00", "b": 413.5}, {"a": "2025-03-24 23:15:00", "b": 411.25}, {"a": "2025-03-24 23:20:00", "b": 426.6}, {"a": "2025-03-24 23:25:00", "b": 424.0}, {"a": "2025-03-24 23:30:00", "b": 403.6666666666667}, {"a": "2025-03-24 23:35:00", "b": 405.0}, {"a": "2025-03-24 23:40:00", "b": 406.5}, {"a": "2025-03-24 23:45:00", "b": 407.75}, {"a": "2025-03-24 23:50:00", "b": 404.6666666666667}, {"a": "2025-03-24 23:55:00", "b": 405.0}, {"a": "2025-03-25 00:00:00", "b": 404.6}, {"a": "2025-03-25 00:05:00", "b": 405.0}, {"a": "2025-03-25 00:10:00", "b": 404.0}, {"a": "2025-03-25 00:15:00", "b": 403.6666666666667}, {"a": "2025-03-25 00:25:00", "b": 405.5}, {"a": "2025-03-25 00:30:00", "b": 406.5}, {"a": "2025-03-25 00:35:00", "b": 405.0}, {"a": "2025-03-25 00:40:00", "b": 406.0}, {"a": "2025-03-25 00:45:00", "b": 404.0}, {"a": "2025-03-25 00:50:00", "b": 402.0}, {"a": "2025-03-25 00:55:00", "b": 412.0}, {"a": "2025-03-25 01:00:00", "b": 426.5}, {"a": "2025-03-25 01:05:00", "b": 435.6}, {"a": "2025-03-25 01:10:00", "b": 438.6}, {"a": "2025-03-25 01:15:00", "b": 434.2}, {"a": "2025-03-25 01:20:00", "b": 436.25}, {"a": "2025-03-25 01:25:00", "b": 436.0}, {"a": "2025-03-25 01:30:00", "b": 452.0}, {"a": "2025-03-25 01:35:00", "b": 454.8}, {"a": "2025-03-25 01:40:00", "b": 426.0}, {"a": "2025-03-25 01:45:00", "b": 425.6}, {"a": "2025-03-25 01:50:00", "b": 423.25}, {"a": "2025-03-25 01:55:00", "b": 409.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    