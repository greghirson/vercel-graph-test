
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-17 07:00:00", "b": 455.0}, {"a": "2024-12-17 07:05:00", "b": 496.0}, {"a": "2024-12-17 07:10:00", "b": 529.8}, {"a": "2024-12-17 07:15:00", "b": 525.25}, {"a": "2024-12-17 07:20:00", "b": 538.6}, {"a": "2024-12-17 07:25:00", "b": 612.2}, {"a": "2024-12-17 07:30:00", "b": 625.6}, {"a": "2024-12-17 07:35:00", "b": 610.5}, {"a": "2024-12-17 07:40:00", "b": 610.75}, {"a": "2024-12-17 07:45:00", "b": 629.2}, {"a": "2024-12-17 07:50:00", "b": 631.0}, {"a": "2024-12-17 07:55:00", "b": 642.2}, {"a": "2024-12-17 08:00:00", "b": 612.8}, {"a": "2024-12-17 08:05:00", "b": 593.0}, {"a": "2024-12-17 08:10:00", "b": 559.6666666666666}, {"a": "2024-12-17 08:15:00", "b": 553.75}, {"a": "2024-12-17 08:20:00", "b": 566.25}, {"a": "2024-12-17 08:25:00", "b": 536.8}, {"a": "2024-12-17 08:30:00", "b": 534.25}, {"a": "2024-12-17 08:35:00", "b": 524.8}, {"a": "2024-12-17 08:40:00", "b": 524.6}, {"a": "2024-12-17 08:45:00", "b": 538.8}, {"a": "2024-12-17 08:50:00", "b": 534.75}, {"a": "2024-12-17 08:55:00", "b": 543.25}, {"a": "2024-12-17 09:00:00", "b": 539.8}, {"a": "2024-12-17 09:05:00", "b": 562.2}, {"a": "2024-12-17 09:10:00", "b": 572.0}, {"a": "2024-12-17 09:15:00", "b": 578.4}, {"a": "2024-12-17 09:20:00", "b": 581.8}, {"a": "2024-12-17 09:25:00", "b": 604.4}, {"a": "2024-12-17 09:30:00", "b": 619.4}, {"a": "2024-12-17 09:35:00", "b": 624.2}, {"a": "2024-12-17 09:40:00", "b": 609.4}, {"a": "2024-12-17 09:45:00", "b": 605.4}, {"a": "2024-12-17 09:50:00", "b": 609.2}, {"a": "2024-12-17 09:55:00", "b": 609.5}, {"a": "2024-12-17 10:00:00", "b": 610.0}, {"a": "2024-12-17 10:05:00", "b": 615.2}, {"a": "2024-12-17 10:10:00", "b": 608.6}, {"a": "2024-12-17 10:15:00", "b": 621.4}, {"a": "2024-12-17 10:20:00", "b": 688.8}, {"a": "2024-12-17 10:25:00", "b": 720.75}, {"a": "2024-12-17 10:30:00", "b": 727.4}, {"a": "2024-12-17 10:35:00", "b": 695.8}, {"a": "2024-12-17 10:40:00", "b": 630.8}, {"a": "2024-12-17 10:45:00", "b": 591.25}, {"a": "2024-12-17 10:50:00", "b": 590.4}, {"a": "2024-12-17 10:55:00", "b": 581.3333333333334}, {"a": "2024-12-17 11:00:00", "b": 578.5}, {"a": "2024-12-17 11:05:00", "b": 560.75}, {"a": "2024-12-17 11:10:00", "b": 552.8}, {"a": "2024-12-17 11:15:00", "b": 557.6}, {"a": "2024-12-17 11:20:00", "b": 558.6}, {"a": "2024-12-17 11:25:00", "b": 530.0}, {"a": "2024-12-17 11:30:00", "b": 526.75}, {"a": "2024-12-17 11:35:00", "b": 540.4}, {"a": "2024-12-17 11:40:00", "b": 531.5}, {"a": "2024-12-17 11:45:00", "b": 538.0}, {"a": "2024-12-17 11:50:00", "b": 559.2}, {"a": "2024-12-17 11:55:00", "b": 555.4}, {"a": "2024-12-17 12:00:00", "b": 545.2}, {"a": "2024-12-17 12:05:00", "b": 548.0}, {"a": "2024-12-17 12:10:00", "b": 543.6}, {"a": "2024-12-17 12:15:00", "b": 520.0}, {"a": "2024-12-17 12:20:00", "b": 503.75}, {"a": "2024-12-17 12:25:00", "b": 497.75}, {"a": "2024-12-17 12:30:00", "b": 490.75}, {"a": "2024-12-17 12:35:00", "b": 489.0}, {"a": "2024-12-17 12:40:00", "b": 484.0}, {"a": "2024-12-17 12:45:00", "b": 490.0}, {"a": "2024-12-17 12:50:00", "b": 488.5}, {"a": "2024-12-17 12:55:00", "b": 486.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    