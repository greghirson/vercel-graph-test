
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-25 16:00:00", "b": 412.75}, {"a": "2024-11-25 16:05:00", "b": 413.25}, {"a": "2024-11-25 16:10:00", "b": 403.5}, {"a": "2024-11-25 16:15:00", "b": 406.2}, {"a": "2024-11-25 16:20:00", "b": 402.5}, {"a": "2024-11-25 16:25:00", "b": 403.8}, {"a": "2024-11-25 16:30:00", "b": 401.6}, {"a": "2024-11-25 16:35:00", "b": 401.25}, {"a": "2024-11-25 16:40:00", "b": 402.25}, {"a": "2024-11-25 16:45:00", "b": 400.6666666666667}, {"a": "2024-11-25 16:50:00", "b": 401.5}, {"a": "2024-11-25 16:55:00", "b": 401.75}, {"a": "2024-11-25 17:00:00", "b": 402.25}, {"a": "2024-11-25 17:05:00", "b": 402.6666666666667}, {"a": "2024-11-25 17:10:00", "b": 402.8}, {"a": "2024-11-25 17:15:00", "b": 402.3333333333333}, {"a": "2024-11-25 17:20:00", "b": 402.0}, {"a": "2024-11-25 17:25:00", "b": 403.25}, {"a": "2024-11-25 17:30:00", "b": 400.5}, {"a": "2024-11-25 17:35:00", "b": 409.2}, {"a": "2024-11-25 17:40:00", "b": 411.0}, {"a": "2024-11-25 17:45:00", "b": 417.4}, {"a": "2024-11-25 17:50:00", "b": 445.0}, {"a": "2024-11-25 17:55:00", "b": 425.4}, {"a": "2024-11-25 18:00:00", "b": 429.6}, {"a": "2024-11-25 18:05:00", "b": 409.0}, {"a": "2024-11-25 18:10:00", "b": 409.0}, {"a": "2024-11-25 18:15:00", "b": 407.5}, {"a": "2024-11-25 18:20:00", "b": 408.0}, {"a": "2024-11-25 18:25:00", "b": 427.2}, {"a": "2024-11-25 18:30:00", "b": 420.6}, {"a": "2024-11-25 18:35:00", "b": 427.0}, {"a": "2024-11-25 18:40:00", "b": 454.6}, {"a": "2024-11-25 18:45:00", "b": 439.6}, {"a": "2024-11-25 18:50:00", "b": 433.8}, {"a": "2024-11-25 18:55:00", "b": 424.5}, {"a": "2024-11-25 19:00:00", "b": 405.6}, {"a": "2024-11-25 19:05:00", "b": 417.25}, {"a": "2024-11-25 19:10:00", "b": 464.0}, {"a": "2024-11-25 19:15:00", "b": 405.2}, {"a": "2024-11-25 19:20:00", "b": 425.75}, {"a": "2024-11-25 19:25:00", "b": 421.6}, {"a": "2024-11-25 19:30:00", "b": 493.6}, {"a": "2024-11-25 19:35:00", "b": 429.3333333333333}, {"a": "2024-11-25 19:40:00", "b": 426.0}, {"a": "2024-11-25 19:45:00", "b": 430.25}, {"a": "2024-11-25 19:50:00", "b": 407.0}, {"a": "2024-11-25 19:55:00", "b": 407.0}, {"a": "2024-11-25 20:00:00", "b": 404.6666666666667}, {"a": "2024-11-25 20:05:00", "b": 414.25}, {"a": "2024-11-25 20:10:00", "b": 464.2}, {"a": "2024-11-25 20:15:00", "b": 428.4}, {"a": "2024-11-25 20:20:00", "b": 404.5}, {"a": "2024-11-25 20:25:00", "b": 405.8}, {"a": "2024-11-25 20:30:00", "b": 430.5}, {"a": "2024-11-25 20:35:00", "b": 407.0}, {"a": "2024-11-25 20:40:00", "b": 421.2}, {"a": "2024-11-25 20:45:00", "b": 434.6}, {"a": "2024-11-25 20:50:00", "b": 409.0}, {"a": "2024-11-25 20:55:00", "b": 404.5}, {"a": "2024-11-25 21:00:00", "b": 425.75}, {"a": "2024-11-25 21:05:00", "b": 439.6}, {"a": "2024-11-25 21:10:00", "b": 432.0}, {"a": "2024-11-25 21:15:00", "b": 450.2}, {"a": "2024-11-25 21:20:00", "b": 405.0}, {"a": "2024-11-25 21:25:00", "b": 408.0}, {"a": "2024-11-25 21:30:00", "b": 416.4}, {"a": "2024-11-25 21:35:00", "b": 409.2}, {"a": "2024-11-25 21:40:00", "b": 408.6}, {"a": "2024-11-25 21:45:00", "b": 414.2}, {"a": "2024-11-25 21:50:00", "b": 405.5}, {"a": "2024-11-25 21:55:00", "b": 403.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    