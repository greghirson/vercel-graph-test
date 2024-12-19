
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-18 13:00:00", "b": 404.5}, {"a": "2024-12-18 13:05:00", "b": 404.0}, {"a": "2024-12-18 13:10:00", "b": 400.75}, {"a": "2024-12-18 13:15:00", "b": 403.5}, {"a": "2024-12-18 13:20:00", "b": 403.8}, {"a": "2024-12-18 13:25:00", "b": 401.75}, {"a": "2024-12-18 13:30:00", "b": 401.0}, {"a": "2024-12-18 13:35:00", "b": 402.5}, {"a": "2024-12-18 13:40:00", "b": 403.0}, {"a": "2024-12-18 13:45:00", "b": 403.5}, {"a": "2024-12-18 13:50:00", "b": 403.0}, {"a": "2024-12-18 13:55:00", "b": 402.25}, {"a": "2024-12-18 14:00:00", "b": 401.4}, {"a": "2024-12-18 14:05:00", "b": 403.3333333333333}, {"a": "2024-12-18 14:10:00", "b": 402.25}, {"a": "2024-12-18 14:15:00", "b": 401.0}, {"a": "2024-12-18 14:20:00", "b": 401.5}, {"a": "2024-12-18 14:25:00", "b": 401.8}, {"a": "2024-12-18 14:30:00", "b": 401.5}, {"a": "2024-12-18 14:35:00", "b": 406.0}, {"a": "2024-12-18 14:40:00", "b": 407.4}, {"a": "2024-12-18 14:45:00", "b": 407.0}, {"a": "2024-12-18 14:50:00", "b": 404.5}, {"a": "2024-12-18 14:55:00", "b": 406.0}, {"a": "2024-12-18 15:00:00", "b": 415.2}, {"a": "2024-12-18 15:05:00", "b": 444.6}, {"a": "2024-12-18 15:10:00", "b": 449.0}, {"a": "2024-12-18 15:15:00", "b": 464.2}, {"a": "2024-12-18 15:20:00", "b": 457.0}, {"a": "2024-12-18 15:25:00", "b": 462.0}, {"a": "2024-12-18 15:30:00", "b": 463.25}, {"a": "2024-12-18 15:35:00", "b": 471.75}, {"a": "2024-12-18 15:40:00", "b": 490.4}, {"a": "2024-12-18 15:45:00", "b": 494.5}, {"a": "2024-12-18 15:50:00", "b": 480.4}, {"a": "2024-12-18 15:55:00", "b": 475.0}, {"a": "2024-12-18 16:00:00", "b": 479.8}, {"a": "2024-12-18 16:05:00", "b": 484.0}, {"a": "2024-12-18 16:10:00", "b": 467.2}, {"a": "2024-12-18 16:15:00", "b": 449.8}, {"a": "2024-12-18 16:20:00", "b": 458.6666666666667}, {"a": "2024-12-18 16:25:00", "b": 458.0}, {"a": "2024-12-18 16:30:00", "b": 465.3333333333333}, {"a": "2024-12-18 16:35:00", "b": 469.25}, {"a": "2024-12-18 16:40:00", "b": 454.6}, {"a": "2024-12-18 16:45:00", "b": 442.25}, {"a": "2024-12-18 16:50:00", "b": 474.4}, {"a": "2024-12-18 16:55:00", "b": 477.8}, {"a": "2024-12-18 17:00:00", "b": 441.0}, {"a": "2024-12-18 17:05:00", "b": 447.4}, {"a": "2024-12-18 17:10:00", "b": 461.2}, {"a": "2024-12-18 17:15:00", "b": 456.2}, {"a": "2024-12-18 17:20:00", "b": 442.25}, {"a": "2024-12-18 17:25:00", "b": 445.0}, {"a": "2024-12-18 17:30:00", "b": 462.25}, {"a": "2024-12-18 17:35:00", "b": 472.4}, {"a": "2024-12-18 17:40:00", "b": 493.0}, {"a": "2024-12-18 17:45:00", "b": 510.6}, {"a": "2024-12-18 17:50:00", "b": 518.2}, {"a": "2024-12-18 17:55:00", "b": 507.75}, {"a": "2024-12-18 18:00:00", "b": 525.0}, {"a": "2024-12-18 18:05:00", "b": 541.0}, {"a": "2024-12-18 18:10:00", "b": 553.2}, {"a": "2024-12-18 18:15:00", "b": 572.4}, {"a": "2024-12-18 18:20:00", "b": 607.0}, {"a": "2024-12-18 18:25:00", "b": 624.75}, {"a": "2024-12-18 18:30:00", "b": 620.6666666666666}, {"a": "2024-12-18 18:35:00", "b": 629.8}, {"a": "2024-12-18 18:40:00", "b": 642.4}, {"a": "2024-12-18 18:45:00", "b": 662.0}, {"a": "2024-12-18 18:50:00", "b": 671.75}, {"a": "2024-12-18 18:55:00", "b": 663.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    