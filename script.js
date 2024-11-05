
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-04 11:00:00", "b": 437.5}, {"a": "2024-11-04 11:05:00", "b": 452.25}, {"a": "2024-11-04 11:10:00", "b": 443.2}, {"a": "2024-11-04 11:15:00", "b": 442.75}, {"a": "2024-11-04 11:20:00", "b": 453.0}, {"a": "2024-11-04 11:25:00", "b": 453.6}, {"a": "2024-11-04 11:30:00", "b": 460.6}, {"a": "2024-11-04 11:35:00", "b": 442.6}, {"a": "2024-11-04 11:40:00", "b": 437.75}, {"a": "2024-11-04 11:45:00", "b": 431.25}, {"a": "2024-11-04 11:50:00", "b": 435.8}, {"a": "2024-11-04 11:55:00", "b": 444.4}, {"a": "2024-11-04 12:00:00", "b": 435.8}, {"a": "2024-11-04 12:05:00", "b": 435.8}, {"a": "2024-11-04 12:10:00", "b": 415.6}, {"a": "2024-11-04 12:15:00", "b": 409.6666666666667}, {"a": "2024-11-04 12:20:00", "b": 417.2}, {"a": "2024-11-04 12:25:00", "b": 410.75}, {"a": "2024-11-04 12:30:00", "b": 408.5}, {"a": "2024-11-04 12:35:00", "b": 411.75}, {"a": "2024-11-04 12:40:00", "b": 408.5}, {"a": "2024-11-04 12:45:00", "b": 429.0}, {"a": "2024-11-04 12:50:00", "b": 433.8}, {"a": "2024-11-04 12:55:00", "b": 412.4}, {"a": "2024-11-04 13:00:00", "b": 409.6666666666667}, {"a": "2024-11-04 13:05:00", "b": 408.0}, {"a": "2024-11-04 13:10:00", "b": 411.5}, {"a": "2024-11-04 13:15:00", "b": 407.0}, {"a": "2024-11-04 13:20:00", "b": 406.0}, {"a": "2024-11-04 13:25:00", "b": 403.6}, {"a": "2024-11-04 13:30:00", "b": 403.25}, {"a": "2024-11-04 13:35:00", "b": 413.8}, {"a": "2024-11-04 13:40:00", "b": 414.75}, {"a": "2024-11-04 13:45:00", "b": 404.0}, {"a": "2024-11-04 13:50:00", "b": 407.25}, {"a": "2024-11-04 13:55:00", "b": 404.8}, {"a": "2024-11-04 14:00:00", "b": 404.0}, {"a": "2024-11-04 14:05:00", "b": 403.0}, {"a": "2024-11-04 14:10:00", "b": 402.5}, {"a": "2024-11-04 14:15:00", "b": 402.5}, {"a": "2024-11-04 14:20:00", "b": 405.0}, {"a": "2024-11-04 14:25:00", "b": 402.25}, {"a": "2024-11-04 14:30:00", "b": 402.2}, {"a": "2024-11-04 14:35:00", "b": 402.0}, {"a": "2024-11-04 14:40:00", "b": 402.5}, {"a": "2024-11-04 14:45:00", "b": 402.25}, {"a": "2024-11-04 14:50:00", "b": 404.4}, {"a": "2024-11-04 14:55:00", "b": 402.4}, {"a": "2024-11-04 15:00:00", "b": 402.5}, {"a": "2024-11-04 15:05:00", "b": 400.5}, {"a": "2024-11-04 15:10:00", "b": 403.0}, {"a": "2024-11-04 15:15:00", "b": 401.6}, {"a": "2024-11-04 15:20:00", "b": 401.2}, {"a": "2024-11-04 15:25:00", "b": 401.6}, {"a": "2024-11-04 15:30:00", "b": 401.5}, {"a": "2024-11-04 15:35:00", "b": 402.25}, {"a": "2024-11-04 15:40:00", "b": 400.75}, {"a": "2024-11-04 15:45:00", "b": 401.75}, {"a": "2024-11-04 15:50:00", "b": 401.8}, {"a": "2024-11-04 15:55:00", "b": 401.5}, {"a": "2024-11-04 16:00:00", "b": 402.0}, {"a": "2024-11-04 16:05:00", "b": 402.0}, {"a": "2024-11-04 16:10:00", "b": 402.2}, {"a": "2024-11-04 16:15:00", "b": 401.75}, {"a": "2024-11-04 16:20:00", "b": 402.8}, {"a": "2024-11-04 16:25:00", "b": 401.0}, {"a": "2024-11-04 16:30:00", "b": 402.4}, {"a": "2024-11-04 16:35:00", "b": 402.0}, {"a": "2024-11-04 16:40:00", "b": 401.4}, {"a": "2024-11-04 16:45:00", "b": 402.6666666666667}, {"a": "2024-11-04 16:50:00", "b": 404.0}, {"a": "2024-11-04 16:55:00", "b": 409.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    