
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-01 04:00:00", "b": 408.0}, {"a": "2025-02-01 04:05:00", "b": 408.0}, {"a": "2025-02-01 04:10:00", "b": 408.3333333333333}, {"a": "2025-02-01 04:15:00", "b": 406.0}, {"a": "2025-02-01 04:20:00", "b": 405.3333333333333}, {"a": "2025-02-01 04:25:00", "b": 408.0}, {"a": "2025-02-01 04:30:00", "b": 408.0}, {"a": "2025-02-01 04:35:00", "b": 411.8}, {"a": "2025-02-01 04:40:00", "b": 415.8}, {"a": "2025-02-01 04:45:00", "b": 410.8}, {"a": "2025-02-01 04:50:00", "b": 411.5}, {"a": "2025-02-01 04:55:00", "b": 418.2}, {"a": "2025-02-01 05:00:00", "b": 412.75}, {"a": "2025-02-01 05:05:00", "b": 408.0}, {"a": "2025-02-01 05:10:00", "b": 408.5}, {"a": "2025-02-01 05:15:00", "b": 416.6}, {"a": "2025-02-01 05:20:00", "b": 411.0}, {"a": "2025-02-01 05:25:00", "b": 408.0}, {"a": "2025-02-01 05:30:00", "b": 412.75}, {"a": "2025-02-01 05:35:00", "b": 408.5}, {"a": "2025-02-01 05:40:00", "b": 409.0}, {"a": "2025-02-01 05:45:00", "b": 408.5}, {"a": "2025-02-01 05:50:00", "b": 408.0}, {"a": "2025-02-01 05:55:00", "b": 406.0}, {"a": "2025-02-01 06:00:00", "b": 407.5}, {"a": "2025-02-01 06:05:00", "b": 412.0}, {"a": "2025-02-01 06:10:00", "b": 418.5}, {"a": "2025-02-01 06:15:00", "b": 419.75}, {"a": "2025-02-01 06:20:00", "b": 414.6}, {"a": "2025-02-01 06:25:00", "b": 417.4}, {"a": "2025-02-01 06:30:00", "b": 409.5}, {"a": "2025-02-01 06:35:00", "b": 409.0}, {"a": "2025-02-01 06:40:00", "b": 411.2}, {"a": "2025-02-01 06:45:00", "b": 412.5}, {"a": "2025-02-01 06:50:00", "b": 413.0}, {"a": "2025-02-01 06:55:00", "b": 422.25}, {"a": "2025-02-01 07:00:00", "b": 414.5}, {"a": "2025-02-01 07:05:00", "b": 407.6666666666667}, {"a": "2025-02-01 07:10:00", "b": 412.4}, {"a": "2025-02-01 07:15:00", "b": 418.6}, {"a": "2025-02-01 07:20:00", "b": 412.0}, {"a": "2025-02-01 07:25:00", "b": 426.0}, {"a": "2025-02-01 07:30:00", "b": 418.6}, {"a": "2025-02-01 07:35:00", "b": 412.25}, {"a": "2025-02-01 07:40:00", "b": 412.75}, {"a": "2025-02-01 07:45:00", "b": 413.8}, {"a": "2025-02-01 07:50:00", "b": 413.0}, {"a": "2025-02-01 07:55:00", "b": 412.5}, {"a": "2025-02-01 08:00:00", "b": 420.6666666666667}, {"a": "2025-02-01 08:05:00", "b": 423.75}, {"a": "2025-02-01 08:10:00", "b": 427.5}, {"a": "2025-02-01 08:15:00", "b": 434.8}, {"a": "2025-02-01 08:20:00", "b": 438.6}, {"a": "2025-02-01 08:25:00", "b": 434.2}, {"a": "2025-02-01 08:30:00", "b": 441.75}, {"a": "2025-02-01 08:35:00", "b": 440.2}, {"a": "2025-02-01 08:40:00", "b": 429.25}, {"a": "2025-02-01 08:45:00", "b": 437.6}, {"a": "2025-02-01 08:50:00", "b": 428.5}, {"a": "2025-02-01 08:55:00", "b": 433.8}, {"a": "2025-02-01 09:00:00", "b": 464.4}, {"a": "2025-02-01 09:05:00", "b": 473.0}, {"a": "2025-02-01 09:10:00", "b": 470.0}, {"a": "2025-02-01 09:15:00", "b": 478.0}, {"a": "2025-02-01 09:20:00", "b": 481.0}, {"a": "2025-02-01 09:25:00", "b": 472.6}, {"a": "2025-02-01 09:30:00", "b": 476.0}, {"a": "2025-02-01 09:35:00", "b": 472.0}, {"a": "2025-02-01 09:40:00", "b": 484.2}, {"a": "2025-02-01 09:45:00", "b": 488.3333333333333}, {"a": "2025-02-01 09:50:00", "b": 480.0}, {"a": "2025-02-01 09:55:00", "b": 476.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    