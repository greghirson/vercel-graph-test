
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-20 11:30:00", "b": 656.0}, {"a": "2024-10-20 11:35:00", "b": 640.2}, {"a": "2024-10-20 11:40:00", "b": 629.0}, {"a": "2024-10-20 11:45:00", "b": 621.0}, {"a": "2024-10-20 11:50:00", "b": 492.5}, {"a": "2024-10-20 11:55:00", "b": 425.2}, {"a": "2024-10-20 12:00:00", "b": 416.0}, {"a": "2024-10-20 12:05:00", "b": 409.4}, {"a": "2024-10-20 12:10:00", "b": 403.0}, {"a": "2024-10-20 12:15:00", "b": 402.2}, {"a": "2024-10-20 12:20:00", "b": 401.75}, {"a": "2024-10-20 12:25:00", "b": 402.5}, {"a": "2024-10-20 12:30:00", "b": 401.75}, {"a": "2024-10-20 12:35:00", "b": 403.0}, {"a": "2024-10-20 12:40:00", "b": 401.2}, {"a": "2024-10-20 12:45:00", "b": 401.25}, {"a": "2024-10-20 12:50:00", "b": 401.3333333333333}, {"a": "2024-10-20 12:55:00", "b": 402.0}, {"a": "2024-10-20 13:00:00", "b": 401.5}, {"a": "2024-10-20 13:05:00", "b": 401.3333333333333}, {"a": "2024-10-20 13:10:00", "b": 401.75}, {"a": "2024-10-20 13:15:00", "b": 402.0}, {"a": "2024-10-20 13:20:00", "b": 402.6666666666667}, {"a": "2024-10-20 13:25:00", "b": 402.0}, {"a": "2024-10-20 13:30:00", "b": 401.6666666666667}, {"a": "2024-10-20 13:35:00", "b": 402.3333333333333}, {"a": "2024-10-20 13:40:00", "b": 402.0}, {"a": "2024-10-20 13:45:00", "b": 402.25}, {"a": "2024-10-20 13:50:00", "b": 416.6}, {"a": "2024-10-20 13:55:00", "b": 444.4}, {"a": "2024-10-20 14:00:00", "b": 501.5}, {"a": "2024-10-20 14:05:00", "b": 482.0}, {"a": "2024-10-20 14:10:00", "b": 480.25}, {"a": "2024-10-20 14:15:00", "b": 472.0}, {"a": "2024-10-20 14:20:00", "b": 475.8}, {"a": "2024-10-20 14:25:00", "b": 485.0}, {"a": "2024-10-20 14:30:00", "b": 458.2}, {"a": "2024-10-20 14:35:00", "b": 415.0}, {"a": "2024-10-20 14:40:00", "b": 416.0}, {"a": "2024-10-20 14:45:00", "b": 427.75}, {"a": "2024-10-20 14:50:00", "b": 417.2}, {"a": "2024-10-20 14:55:00", "b": 402.2}, {"a": "2024-10-20 15:00:00", "b": 402.6666666666667}, {"a": "2024-10-20 15:05:00", "b": 401.5}, {"a": "2024-10-20 15:10:00", "b": 401.6}, {"a": "2024-10-20 15:15:00", "b": 403.0}, {"a": "2024-10-20 15:20:00", "b": 402.0}, {"a": "2024-10-20 15:25:00", "b": 402.3333333333333}, {"a": "2024-10-20 15:30:00", "b": 401.8}, {"a": "2024-10-20 15:35:00", "b": 402.6}, {"a": "2024-10-20 15:40:00", "b": 402.0}, {"a": "2024-10-20 15:45:00", "b": 401.6666666666667}, {"a": "2024-10-20 15:50:00", "b": 402.0}, {"a": "2024-10-20 15:55:00", "b": 402.3333333333333}, {"a": "2024-10-20 16:00:00", "b": 402.0}, {"a": "2024-10-20 16:05:00", "b": 403.0}, {"a": "2024-10-20 16:10:00", "b": 402.5}, {"a": "2024-10-20 16:15:00", "b": 402.0}, {"a": "2024-10-20 16:20:00", "b": 401.75}, {"a": "2024-10-20 16:25:00", "b": 402.2}, {"a": "2024-10-20 16:30:00", "b": 402.6}, {"a": "2024-10-20 16:35:00", "b": 401.5}, {"a": "2024-10-20 16:40:00", "b": 402.0}, {"a": "2024-10-20 16:45:00", "b": 402.6}, {"a": "2024-10-20 16:50:00", "b": 402.0}, {"a": "2024-10-20 16:55:00", "b": 401.0}, {"a": "2024-10-20 17:00:00", "b": 402.0}, {"a": "2024-10-20 17:05:00", "b": 402.8}, {"a": "2024-10-20 17:10:00", "b": 401.8}, {"a": "2024-10-20 17:15:00", "b": 401.6666666666667}, {"a": "2024-10-20 17:20:00", "b": 402.0}, {"a": "2024-10-20 17:25:00", "b": 402.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    