
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-03 08:00:00", "b": 542.2}, {"a": "2024-12-03 08:05:00", "b": 548.2}, {"a": "2024-12-03 08:10:00", "b": 552.25}, {"a": "2024-12-03 08:15:00", "b": 562.2}, {"a": "2024-12-03 08:20:00", "b": 558.8}, {"a": "2024-12-03 08:25:00", "b": 530.4}, {"a": "2024-12-03 08:30:00", "b": 524.5}, {"a": "2024-12-03 08:35:00", "b": 513.5}, {"a": "2024-12-03 08:40:00", "b": 509.5}, {"a": "2024-12-03 08:45:00", "b": 513.0}, {"a": "2024-12-03 08:50:00", "b": 581.8}, {"a": "2024-12-03 08:55:00", "b": 578.0}, {"a": "2024-12-03 09:00:00", "b": 559.5}, {"a": "2024-12-03 09:05:00", "b": 567.0}, {"a": "2024-12-03 09:10:00", "b": 547.8}, {"a": "2024-12-03 09:15:00", "b": 544.6}, {"a": "2024-12-03 09:20:00", "b": 561.5}, {"a": "2024-12-03 09:25:00", "b": 567.0}, {"a": "2024-12-03 09:30:00", "b": 562.6}, {"a": "2024-12-03 09:35:00", "b": 579.4}, {"a": "2024-12-03 09:40:00", "b": 588.2}, {"a": "2024-12-03 09:45:00", "b": 588.75}, {"a": "2024-12-03 09:50:00", "b": 626.4}, {"a": "2024-12-03 09:55:00", "b": 600.8}, {"a": "2024-12-03 10:00:00", "b": 573.0}, {"a": "2024-12-03 10:05:00", "b": 559.5}, {"a": "2024-12-03 10:10:00", "b": 546.2}, {"a": "2024-12-03 10:15:00", "b": 543.0}, {"a": "2024-12-03 10:20:00", "b": 556.5}, {"a": "2024-12-03 10:25:00", "b": 532.4}, {"a": "2024-12-03 10:30:00", "b": 527.0}, {"a": "2024-12-03 10:35:00", "b": 507.75}, {"a": "2024-12-03 10:40:00", "b": 503.4}, {"a": "2024-12-03 10:45:00", "b": 485.0}, {"a": "2024-12-03 10:50:00", "b": 486.4}, {"a": "2024-12-03 10:55:00", "b": 491.75}, {"a": "2024-12-03 11:00:00", "b": 487.75}, {"a": "2024-12-03 11:05:00", "b": 496.4}, {"a": "2024-12-03 11:10:00", "b": 492.6666666666667}, {"a": "2024-12-03 11:15:00", "b": 487.3333333333333}, {"a": "2024-12-03 11:20:00", "b": 480.2}, {"a": "2024-12-03 11:25:00", "b": 473.8}, {"a": "2024-12-03 11:30:00", "b": 456.6}, {"a": "2024-12-03 11:35:00", "b": 454.2}, {"a": "2024-12-03 11:40:00", "b": 452.0}, {"a": "2024-12-03 11:45:00", "b": 448.8}, {"a": "2024-12-03 11:50:00", "b": 447.75}, {"a": "2024-12-03 11:55:00", "b": 443.3333333333333}, {"a": "2024-12-03 12:00:00", "b": 446.0}, {"a": "2024-12-03 12:05:00", "b": 452.8}, {"a": "2024-12-03 12:10:00", "b": 457.6}, {"a": "2024-12-03 12:15:00", "b": 462.4}, {"a": "2024-12-03 12:20:00", "b": 464.8}, {"a": "2024-12-03 12:25:00", "b": 469.25}, {"a": "2024-12-03 12:30:00", "b": 477.8}, {"a": "2024-12-03 12:35:00", "b": 489.5}, {"a": "2024-12-03 12:40:00", "b": 472.4}, {"a": "2024-12-03 12:45:00", "b": 471.8}, {"a": "2024-12-03 12:50:00", "b": 454.4}, {"a": "2024-12-03 12:55:00", "b": 437.4}, {"a": "2024-12-03 13:00:00", "b": 451.0}, {"a": "2024-12-03 13:05:00", "b": 518.0}, {"a": "2024-12-03 13:10:00", "b": 498.25}, {"a": "2024-12-03 13:15:00", "b": 513.6}, {"a": "2024-12-03 13:20:00", "b": 518.8}, {"a": "2024-12-03 13:25:00", "b": 508.8}, {"a": "2024-12-03 13:30:00", "b": 460.0}, {"a": "2024-12-03 13:35:00", "b": 450.6}, {"a": "2024-12-03 13:40:00", "b": 417.75}, {"a": "2024-12-03 13:45:00", "b": 411.8}, {"a": "2024-12-03 13:50:00", "b": 429.0}, {"a": "2024-12-03 13:55:00", "b": 432.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    