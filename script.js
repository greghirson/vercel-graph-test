
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 00:40:00", "b": 527.25}, {"a": "2024-11-05 00:45:00", "b": 520.25}, {"a": "2024-11-05 00:50:00", "b": 524.5}, {"a": "2024-11-05 00:55:00", "b": 504.6}, {"a": "2024-11-05 01:00:00", "b": 503.2}, {"a": "2024-11-05 01:05:00", "b": 475.0}, {"a": "2024-11-05 01:10:00", "b": 476.4}, {"a": "2024-11-05 01:15:00", "b": 472.25}, {"a": "2024-11-05 01:20:00", "b": 471.4}, {"a": "2024-11-05 01:25:00", "b": 464.2}, {"a": "2024-11-05 01:30:00", "b": 473.0}, {"a": "2024-11-05 01:35:00", "b": 481.8}, {"a": "2024-11-05 01:40:00", "b": 487.2}, {"a": "2024-11-05 01:45:00", "b": 463.5}, {"a": "2024-11-05 01:50:00", "b": 462.2}, {"a": "2024-11-05 01:55:00", "b": 465.4}, {"a": "2024-11-05 02:00:00", "b": 443.4}, {"a": "2024-11-05 02:05:00", "b": 450.2}, {"a": "2024-11-05 02:10:00", "b": 475.0}, {"a": "2024-11-05 02:15:00", "b": 485.6}, {"a": "2024-11-05 02:20:00", "b": 452.6}, {"a": "2024-11-05 02:25:00", "b": 427.25}, {"a": "2024-11-05 02:30:00", "b": 440.6}, {"a": "2024-11-05 02:35:00", "b": 453.8}, {"a": "2024-11-05 02:40:00", "b": 452.8}, {"a": "2024-11-05 02:45:00", "b": 445.75}, {"a": "2024-11-05 02:50:00", "b": 432.5}, {"a": "2024-11-05 02:55:00", "b": 416.2}, {"a": "2024-11-05 03:00:00", "b": 422.8}, {"a": "2024-11-05 03:05:00", "b": 442.2}, {"a": "2024-11-05 03:10:00", "b": 437.6}, {"a": "2024-11-05 03:15:00", "b": 423.2}, {"a": "2024-11-05 03:20:00", "b": 428.8}, {"a": "2024-11-05 03:25:00", "b": 428.2}, {"a": "2024-11-05 03:30:00", "b": 416.0}, {"a": "2024-11-05 03:35:00", "b": 409.4}, {"a": "2024-11-05 03:40:00", "b": 457.8}, {"a": "2024-11-05 03:45:00", "b": 461.0}, {"a": "2024-11-05 03:50:00", "b": 432.0}, {"a": "2024-11-05 03:55:00", "b": 448.6}, {"a": "2024-11-05 04:00:00", "b": 465.3333333333333}, {"a": "2024-11-05 04:05:00", "b": 454.5}, {"a": "2024-11-05 04:10:00", "b": 434.8}, {"a": "2024-11-05 04:15:00", "b": 428.5}, {"a": "2024-11-05 04:20:00", "b": 429.0}, {"a": "2024-11-05 04:25:00", "b": 429.0}, {"a": "2024-11-05 04:30:00", "b": 432.25}, {"a": "2024-11-05 04:35:00", "b": 448.75}, {"a": "2024-11-05 04:40:00", "b": 455.4}, {"a": "2024-11-05 04:45:00", "b": 413.3333333333333}, {"a": "2024-11-05 04:50:00", "b": 439.8}, {"a": "2024-11-05 04:55:00", "b": 455.4}, {"a": "2024-11-05 05:00:00", "b": 465.6}, {"a": "2024-11-05 05:05:00", "b": 440.4}, {"a": "2024-11-05 05:10:00", "b": 423.5}, {"a": "2024-11-05 05:15:00", "b": 417.8}, {"a": "2024-11-05 05:20:00", "b": 410.0}, {"a": "2024-11-05 05:25:00", "b": 407.6666666666667}, {"a": "2024-11-05 05:30:00", "b": 408.6666666666667}, {"a": "2024-11-05 05:35:00", "b": 415.0}, {"a": "2024-11-05 05:40:00", "b": 445.6}, {"a": "2024-11-05 05:45:00", "b": 455.4}, {"a": "2024-11-05 05:50:00", "b": 439.0}, {"a": "2024-11-05 05:55:00", "b": 437.25}, {"a": "2024-11-05 06:00:00", "b": 441.0}, {"a": "2024-11-05 06:05:00", "b": 437.0}, {"a": "2024-11-05 06:10:00", "b": 424.75}, {"a": "2024-11-05 06:15:00", "b": 422.6666666666667}, {"a": "2024-11-05 06:20:00", "b": 444.75}, {"a": "2024-11-05 06:25:00", "b": 472.4}, {"a": "2024-11-05 06:30:00", "b": 452.2}, {"a": "2024-11-05 06:35:00", "b": 450.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    