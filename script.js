
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-11 17:00:00", "b": 423.4}, {"a": "2025-04-11 17:05:00", "b": 418.0}, {"a": "2025-04-11 17:10:00", "b": 416.2}, {"a": "2025-04-11 17:15:00", "b": 412.25}, {"a": "2025-04-11 17:20:00", "b": 412.0}, {"a": "2025-04-11 17:25:00", "b": 422.75}, {"a": "2025-04-11 17:30:00", "b": 417.25}, {"a": "2025-04-11 17:35:00", "b": 419.25}, {"a": "2025-04-11 17:40:00", "b": 422.0}, {"a": "2025-04-11 17:45:00", "b": 433.25}, {"a": "2025-04-11 17:50:00", "b": 421.2}, {"a": "2025-04-11 17:55:00", "b": 428.8}, {"a": "2025-04-11 18:00:00", "b": 443.6}, {"a": "2025-04-11 18:05:00", "b": 434.8}, {"a": "2025-04-11 18:10:00", "b": 430.25}, {"a": "2025-04-11 18:15:00", "b": 435.75}, {"a": "2025-04-11 18:20:00", "b": 421.0}, {"a": "2025-04-11 18:25:00", "b": 413.0}, {"a": "2025-04-11 18:30:00", "b": 409.5}, {"a": "2025-04-11 18:40:00", "b": 409.6}, {"a": "2025-04-11 18:45:00", "b": 429.75}, {"a": "2025-04-11 18:50:00", "b": 439.0}, {"a": "2025-04-11 18:55:00", "b": 441.6}, {"a": "2025-04-11 19:00:00", "b": 443.5}, {"a": "2025-04-11 19:05:00", "b": 443.0}, {"a": "2025-04-11 19:10:00", "b": 449.6}, {"a": "2025-04-11 19:15:00", "b": 436.8}, {"a": "2025-04-11 19:20:00", "b": 441.6666666666667}, {"a": "2025-04-11 19:25:00", "b": 440.8}, {"a": "2025-04-11 19:30:00", "b": 439.0}, {"a": "2025-04-11 19:35:00", "b": 447.6}, {"a": "2025-04-11 19:40:00", "b": 447.25}, {"a": "2025-04-11 19:45:00", "b": 431.2}, {"a": "2025-04-11 19:50:00", "b": 422.6}, {"a": "2025-04-11 19:55:00", "b": 433.0}, {"a": "2025-04-11 20:00:00", "b": 444.0}, {"a": "2025-04-11 20:05:00", "b": 438.25}, {"a": "2025-04-11 20:10:00", "b": 424.4}, {"a": "2025-04-11 20:15:00", "b": 419.75}, {"a": "2025-04-11 20:20:00", "b": 431.0}, {"a": "2025-04-11 20:25:00", "b": 416.5}, {"a": "2025-04-11 20:30:00", "b": 414.8}, {"a": "2025-04-11 20:35:00", "b": 427.2}, {"a": "2025-04-11 20:40:00", "b": 419.0}, {"a": "2025-04-11 20:45:00", "b": 422.0}, {"a": "2025-04-11 20:50:00", "b": 414.8}, {"a": "2025-04-11 20:55:00", "b": 403.0}, {"a": "2025-04-11 21:00:00", "b": 405.0}, {"a": "2025-04-11 21:05:00", "b": 414.0}, {"a": "2025-04-11 21:10:00", "b": 411.5}, {"a": "2025-04-11 21:15:00", "b": 409.6}, {"a": "2025-04-11 21:20:00", "b": 406.5}, {"a": "2025-04-11 21:25:00", "b": 406.0}, {"a": "2025-04-11 21:30:00", "b": 408.3333333333333}, {"a": "2025-04-11 21:35:00", "b": 411.25}, {"a": "2025-04-11 21:40:00", "b": 408.0}, {"a": "2025-04-11 21:45:00", "b": 410.0}, {"a": "2025-04-11 21:50:00", "b": 409.6666666666667}, {"a": "2025-04-11 21:55:00", "b": 407.5}, {"a": "2025-04-11 22:00:00", "b": 409.0}, {"a": "2025-04-11 22:05:00", "b": 406.6666666666667}, {"a": "2025-04-11 22:10:00", "b": 404.5}, {"a": "2025-04-11 22:15:00", "b": 405.5}, {"a": "2025-04-11 22:20:00", "b": 412.25}, {"a": "2025-04-11 22:25:00", "b": 420.8}, {"a": "2025-04-11 22:30:00", "b": 412.0}, {"a": "2025-04-11 22:35:00", "b": 408.5}, {"a": "2025-04-11 22:40:00", "b": 411.0}, {"a": "2025-04-11 22:45:00", "b": 417.2}, {"a": "2025-04-11 22:50:00", "b": 410.8}, {"a": "2025-04-11 22:55:00", "b": 408.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    