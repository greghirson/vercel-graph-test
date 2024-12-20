
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-20 09:00:00", "b": 531.0}, {"a": "2024-12-20 09:05:00", "b": 535.6}, {"a": "2024-12-20 09:10:00", "b": 542.4}, {"a": "2024-12-20 09:15:00", "b": 549.2}, {"a": "2024-12-20 09:20:00", "b": 548.4}, {"a": "2024-12-20 09:25:00", "b": 536.2}, {"a": "2024-12-20 09:30:00", "b": 535.25}, {"a": "2024-12-20 09:35:00", "b": 512.8}, {"a": "2024-12-20 09:40:00", "b": 503.8}, {"a": "2024-12-20 09:45:00", "b": 491.6}, {"a": "2024-12-20 09:50:00", "b": 495.2}, {"a": "2024-12-20 09:55:00", "b": 484.0}, {"a": "2024-12-20 10:00:00", "b": 491.0}, {"a": "2024-12-20 10:05:00", "b": 491.5}, {"a": "2024-12-20 10:10:00", "b": 482.6666666666667}, {"a": "2024-12-20 10:15:00", "b": 472.75}, {"a": "2024-12-20 10:20:00", "b": 469.8}, {"a": "2024-12-20 10:25:00", "b": 481.4}, {"a": "2024-12-20 10:30:00", "b": 468.6}, {"a": "2024-12-20 10:35:00", "b": 455.6}, {"a": "2024-12-20 10:40:00", "b": 448.4}, {"a": "2024-12-20 10:45:00", "b": 451.25}, {"a": "2024-12-20 10:50:00", "b": 441.4}, {"a": "2024-12-20 10:55:00", "b": 435.6}, {"a": "2024-12-20 11:00:00", "b": 443.2}, {"a": "2024-12-20 11:05:00", "b": 438.0}, {"a": "2024-12-20 11:10:00", "b": 439.4}, {"a": "2024-12-20 11:15:00", "b": 443.6666666666667}, {"a": "2024-12-20 11:20:00", "b": 435.8}, {"a": "2024-12-20 11:25:00", "b": 430.0}, {"a": "2024-12-20 11:30:00", "b": 420.6}, {"a": "2024-12-20 11:35:00", "b": 412.2}, {"a": "2024-12-20 11:40:00", "b": 412.6}, {"a": "2024-12-20 11:45:00", "b": 415.25}, {"a": "2024-12-20 11:50:00", "b": 416.2}, {"a": "2024-12-20 11:55:00", "b": 409.6666666666667}, {"a": "2024-12-20 12:00:00", "b": 406.5}, {"a": "2024-12-20 12:05:00", "b": 405.0}, {"a": "2024-12-20 12:10:00", "b": 409.0}, {"a": "2024-12-20 12:15:00", "b": 409.0}, {"a": "2024-12-20 12:20:00", "b": 405.5}, {"a": "2024-12-20 12:25:00", "b": 405.6}, {"a": "2024-12-20 12:30:00", "b": 404.0}, {"a": "2024-12-20 12:35:00", "b": 405.3333333333333}, {"a": "2024-12-20 12:40:00", "b": 402.6}, {"a": "2024-12-20 12:45:00", "b": 402.0}, {"a": "2024-12-20 12:50:00", "b": 402.0}, {"a": "2024-12-20 12:55:00", "b": 402.6666666666667}, {"a": "2024-12-20 13:00:00", "b": 403.5}, {"a": "2024-12-20 13:05:00", "b": 405.0}, {"a": "2024-12-20 13:10:00", "b": 403.75}, {"a": "2024-12-20 13:15:00", "b": 402.6666666666667}, {"a": "2024-12-20 13:20:00", "b": 401.25}, {"a": "2024-12-20 13:25:00", "b": 402.25}, {"a": "2024-12-20 13:30:00", "b": 402.25}, {"a": "2024-12-20 13:35:00", "b": 402.5}, {"a": "2024-12-20 13:40:00", "b": 403.5}, {"a": "2024-12-20 13:45:00", "b": 402.6666666666667}, {"a": "2024-12-20 13:50:00", "b": 402.25}, {"a": "2024-12-20 13:55:00", "b": 401.25}, {"a": "2024-12-20 14:00:00", "b": 402.0}, {"a": "2024-12-20 14:05:00", "b": 401.8}, {"a": "2024-12-20 14:10:00", "b": 401.25}, {"a": "2024-12-20 14:15:00", "b": 403.0}, {"a": "2024-12-20 14:20:00", "b": 402.0}, {"a": "2024-12-20 14:25:00", "b": 401.5}, {"a": "2024-12-20 14:30:00", "b": 402.5}, {"a": "2024-12-20 14:35:00", "b": 402.25}, {"a": "2024-12-20 14:40:00", "b": 402.0}, {"a": "2024-12-20 14:45:00", "b": 401.75}, {"a": "2024-12-20 14:50:00", "b": 402.25}, {"a": "2024-12-20 14:55:00", "b": 401.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    