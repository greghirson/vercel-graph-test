
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-23 09:50:00", "b": 463.8}, {"a": "2024-10-23 09:55:00", "b": 468.4}, {"a": "2024-10-23 10:00:00", "b": 468.2}, {"a": "2024-10-23 10:05:00", "b": 467.4}, {"a": "2024-10-23 10:10:00", "b": 468.4}, {"a": "2024-10-23 10:15:00", "b": 466.4}, {"a": "2024-10-23 10:20:00", "b": 476.0}, {"a": "2024-10-23 10:25:00", "b": 465.4}, {"a": "2024-10-23 10:30:00", "b": 459.4}, {"a": "2024-10-23 10:35:00", "b": 437.2}, {"a": "2024-10-23 10:40:00", "b": 424.75}, {"a": "2024-10-23 10:45:00", "b": 439.2}, {"a": "2024-10-23 10:50:00", "b": 444.4}, {"a": "2024-10-23 10:55:00", "b": 444.4}, {"a": "2024-10-23 11:00:00", "b": 435.2}, {"a": "2024-10-23 11:05:00", "b": 439.6}, {"a": "2024-10-23 11:10:00", "b": 440.5}, {"a": "2024-10-23 11:15:00", "b": 425.25}, {"a": "2024-10-23 11:20:00", "b": 429.2}, {"a": "2024-10-23 11:25:00", "b": 427.6}, {"a": "2024-10-23 11:30:00", "b": 431.25}, {"a": "2024-10-23 11:35:00", "b": 419.75}, {"a": "2024-10-23 11:40:00", "b": 415.25}, {"a": "2024-10-23 11:45:00", "b": 429.0}, {"a": "2024-10-23 11:50:00", "b": 424.8}, {"a": "2024-10-23 11:55:00", "b": 421.4}, {"a": "2024-10-23 12:00:00", "b": 418.8}, {"a": "2024-10-23 12:05:00", "b": 424.0}, {"a": "2024-10-23 12:10:00", "b": 419.6666666666667}, {"a": "2024-10-23 12:15:00", "b": 420.0}, {"a": "2024-10-23 12:20:00", "b": 411.3333333333333}, {"a": "2024-10-23 12:25:00", "b": 408.5}, {"a": "2024-10-23 12:30:00", "b": 412.0}, {"a": "2024-10-23 12:35:00", "b": 410.6666666666667}, {"a": "2024-10-23 12:40:00", "b": 411.25}, {"a": "2024-10-23 12:45:00", "b": 407.8}, {"a": "2024-10-23 12:50:00", "b": 407.5}, {"a": "2024-10-23 12:55:00", "b": 405.0}, {"a": "2024-10-23 13:00:00", "b": 403.5}, {"a": "2024-10-23 13:05:00", "b": 405.5}, {"a": "2024-10-23 13:10:00", "b": 406.5}, {"a": "2024-10-23 13:15:00", "b": 405.5}, {"a": "2024-10-23 13:20:00", "b": 404.6666666666667}, {"a": "2024-10-23 13:30:00", "b": 403.5}, {"a": "2024-10-23 13:35:00", "b": 404.0}, {"a": "2024-10-23 13:40:00", "b": 404.6666666666667}, {"a": "2024-10-23 13:45:00", "b": 406.0}, {"a": "2024-10-23 13:50:00", "b": 406.6666666666667}, {"a": "2024-10-23 13:55:00", "b": 405.0}, {"a": "2024-10-23 14:00:00", "b": 406.0}, {"a": "2024-10-23 14:05:00", "b": 405.0}, {"a": "2024-10-23 14:10:00", "b": 403.75}, {"a": "2024-10-23 14:15:00", "b": 404.5}, {"a": "2024-10-23 14:20:00", "b": 402.5}, {"a": "2024-10-23 14:25:00", "b": 402.3333333333333}, {"a": "2024-10-23 14:30:00", "b": 404.6}, {"a": "2024-10-23 14:35:00", "b": 403.5}, {"a": "2024-10-23 14:40:00", "b": 404.3333333333333}, {"a": "2024-10-23 14:45:00", "b": 402.0}, {"a": "2024-10-23 14:50:00", "b": 402.6666666666667}, {"a": "2024-10-23 14:55:00", "b": 402.5}, {"a": "2024-10-23 15:00:00", "b": 402.0}, {"a": "2024-10-23 15:05:00", "b": 402.25}, {"a": "2024-10-23 15:10:00", "b": 401.0}, {"a": "2024-10-23 15:15:00", "b": 401.6666666666667}, {"a": "2024-10-23 15:20:00", "b": 402.25}, {"a": "2024-10-23 15:25:00", "b": 402.5}, {"a": "2024-10-23 15:30:00", "b": 401.25}, {"a": "2024-10-23 15:35:00", "b": 402.2}, {"a": "2024-10-23 15:40:00", "b": 402.75}, {"a": "2024-10-23 15:45:00", "b": 402.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    