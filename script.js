
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-14 18:00:00", "b": 406.0}, {"a": "2025-04-14 18:05:00", "b": 406.5}, {"a": "2025-04-14 18:10:00", "b": 403.0}, {"a": "2025-04-14 18:15:00", "b": 401.8}, {"a": "2025-04-14 18:20:00", "b": 401.25}, {"a": "2025-04-14 18:25:00", "b": 402.4}, {"a": "2025-04-14 18:30:00", "b": 401.75}, {"a": "2025-04-14 18:35:00", "b": 402.25}, {"a": "2025-04-14 18:40:00", "b": 402.0}, {"a": "2025-04-14 18:45:00", "b": 402.25}, {"a": "2025-04-14 18:50:00", "b": 401.5}, {"a": "2025-04-14 18:55:00", "b": 401.0}, {"a": "2025-04-14 19:00:00", "b": 402.0}, {"a": "2025-04-14 19:05:00", "b": 402.75}, {"a": "2025-04-14 19:10:00", "b": 401.2}, {"a": "2025-04-14 19:15:00", "b": 402.0}, {"a": "2025-04-14 19:20:00", "b": 402.25}, {"a": "2025-04-14 19:25:00", "b": 401.75}, {"a": "2025-04-14 19:30:00", "b": 401.8}, {"a": "2025-04-14 19:35:00", "b": 402.25}, {"a": "2025-04-14 19:40:00", "b": 402.0}, {"a": "2025-04-14 19:45:00", "b": 404.0}, {"a": "2025-04-14 19:50:00", "b": 405.5}, {"a": "2025-04-14 19:55:00", "b": 407.0}, {"a": "2025-04-14 20:00:00", "b": 409.5}, {"a": "2025-04-14 20:05:00", "b": 411.5}, {"a": "2025-04-14 20:10:00", "b": 408.5}, {"a": "2025-04-14 20:15:00", "b": 408.6666666666667}, {"a": "2025-04-14 20:20:00", "b": 421.0}, {"a": "2025-04-14 20:25:00", "b": 429.8}, {"a": "2025-04-14 20:30:00", "b": 424.0}, {"a": "2025-04-14 20:35:00", "b": 417.25}, {"a": "2025-04-14 20:40:00", "b": 412.0}, {"a": "2025-04-14 20:45:00", "b": 415.5}, {"a": "2025-04-14 20:50:00", "b": 420.0}, {"a": "2025-04-14 20:55:00", "b": 420.8}, {"a": "2025-04-14 21:00:00", "b": 425.3333333333333}, {"a": "2025-04-14 21:05:00", "b": 426.6}, {"a": "2025-04-14 21:10:00", "b": 427.4}, {"a": "2025-04-14 21:15:00", "b": 429.5}, {"a": "2025-04-14 21:20:00", "b": 437.2}, {"a": "2025-04-14 21:25:00", "b": 440.2}, {"a": "2025-04-14 21:30:00", "b": 433.0}, {"a": "2025-04-14 21:35:00", "b": 427.2}, {"a": "2025-04-14 21:40:00", "b": 421.5}, {"a": "2025-04-14 21:45:00", "b": 427.75}, {"a": "2025-04-14 21:50:00", "b": 423.6666666666667}, {"a": "2025-04-14 21:55:00", "b": 413.75}, {"a": "2025-04-14 22:00:00", "b": 413.25}, {"a": "2025-04-14 22:05:00", "b": 426.3333333333333}, {"a": "2025-04-14 22:10:00", "b": 432.0}, {"a": "2025-04-14 22:15:00", "b": 423.6666666666667}, {"a": "2025-04-14 22:20:00", "b": 418.8}, {"a": "2025-04-14 22:25:00", "b": 416.8}, {"a": "2025-04-14 22:30:00", "b": 422.75}, {"a": "2025-04-14 22:35:00", "b": 413.8}, {"a": "2025-04-14 22:40:00", "b": 423.6}, {"a": "2025-04-14 22:45:00", "b": 431.0}, {"a": "2025-04-14 22:50:00", "b": 419.8}, {"a": "2025-04-14 22:55:00", "b": 417.25}, {"a": "2025-04-14 23:00:00", "b": 416.0}, {"a": "2025-04-14 23:05:00", "b": 414.25}, {"a": "2025-04-14 23:10:00", "b": 420.8}, {"a": "2025-04-14 23:15:00", "b": 424.8}, {"a": "2025-04-14 23:20:00", "b": 426.0}, {"a": "2025-04-14 23:25:00", "b": 430.2}, {"a": "2025-04-14 23:30:00", "b": 416.25}, {"a": "2025-04-14 23:35:00", "b": 408.5}, {"a": "2025-04-14 23:40:00", "b": 418.25}, {"a": "2025-04-14 23:45:00", "b": 421.25}, {"a": "2025-04-14 23:50:00", "b": 424.0}, {"a": "2025-04-14 23:55:00", "b": 430.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    