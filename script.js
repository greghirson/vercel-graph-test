
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-11 04:00:00", "b": 469.2}, {"a": "2025-03-11 04:05:00", "b": 465.0}, {"a": "2025-03-11 04:10:00", "b": 467.4}, {"a": "2025-03-11 04:15:00", "b": 461.2}, {"a": "2025-03-11 04:20:00", "b": 454.4}, {"a": "2025-03-11 04:25:00", "b": 465.6}, {"a": "2025-03-11 04:30:00", "b": 462.2}, {"a": "2025-03-11 04:35:00", "b": 450.0}, {"a": "2025-03-11 04:40:00", "b": 453.25}, {"a": "2025-03-11 04:45:00", "b": 451.4}, {"a": "2025-03-11 04:50:00", "b": 453.2}, {"a": "2025-03-11 04:55:00", "b": 448.6}, {"a": "2025-03-11 05:00:00", "b": 451.4}, {"a": "2025-03-11 05:05:00", "b": 452.4}, {"a": "2025-03-11 05:10:00", "b": 457.8}, {"a": "2025-03-11 05:15:00", "b": 451.75}, {"a": "2025-03-11 05:20:00", "b": 443.5}, {"a": "2025-03-11 05:25:00", "b": 454.4}, {"a": "2025-03-11 05:30:00", "b": 450.6}, {"a": "2025-03-11 05:35:00", "b": 451.0}, {"a": "2025-03-11 05:40:00", "b": 457.2}, {"a": "2025-03-11 05:45:00", "b": 464.0}, {"a": "2025-03-11 05:50:00", "b": 458.6}, {"a": "2025-03-11 05:55:00", "b": 440.0}, {"a": "2025-03-11 06:00:00", "b": 439.2}, {"a": "2025-03-11 06:05:00", "b": 449.2}, {"a": "2025-03-11 06:10:00", "b": 430.6}, {"a": "2025-03-11 06:15:00", "b": 418.3333333333333}, {"a": "2025-03-11 06:20:00", "b": 436.25}, {"a": "2025-03-11 06:25:00", "b": 434.25}, {"a": "2025-03-11 06:30:00", "b": 445.75}, {"a": "2025-03-11 06:35:00", "b": 449.6666666666667}, {"a": "2025-03-11 06:40:00", "b": 437.2}, {"a": "2025-03-11 06:45:00", "b": 441.8}, {"a": "2025-03-11 06:50:00", "b": 484.2}, {"a": "2025-03-11 06:55:00", "b": 510.4}, {"a": "2025-03-11 07:00:00", "b": 514.0}, {"a": "2025-03-11 07:05:00", "b": 519.8}, {"a": "2025-03-11 07:10:00", "b": 517.25}, {"a": "2025-03-11 07:15:00", "b": 527.8}, {"a": "2025-03-11 07:20:00", "b": 532.4}, {"a": "2025-03-11 07:25:00", "b": 524.2}, {"a": "2025-03-11 07:30:00", "b": 548.0}, {"a": "2025-03-11 07:35:00", "b": 566.0}, {"a": "2025-03-11 07:40:00", "b": 555.4}, {"a": "2025-03-11 07:45:00", "b": 557.6}, {"a": "2025-03-11 07:50:00", "b": 556.6}, {"a": "2025-03-11 07:55:00", "b": 561.8}, {"a": "2025-03-11 08:00:00", "b": 570.25}, {"a": "2025-03-11 08:05:00", "b": 568.25}, {"a": "2025-03-11 08:10:00", "b": 570.4}, {"a": "2025-03-11 08:15:00", "b": 577.25}, {"a": "2025-03-11 08:20:00", "b": 570.2}, {"a": "2025-03-11 08:25:00", "b": 549.4}, {"a": "2025-03-11 08:30:00", "b": 561.6}, {"a": "2025-03-11 08:35:00", "b": 563.6}, {"a": "2025-03-11 08:40:00", "b": 548.0}, {"a": "2025-03-11 08:45:00", "b": 545.8}, {"a": "2025-03-11 08:50:00", "b": 547.2}, {"a": "2025-03-11 08:55:00", "b": 537.5}, {"a": "2025-03-11 09:00:00", "b": 549.4}, {"a": "2025-03-11 09:05:00", "b": 574.6}, {"a": "2025-03-11 09:10:00", "b": 601.25}, {"a": "2025-03-11 09:15:00", "b": 634.4}, {"a": "2025-03-11 09:20:00", "b": 663.6}, {"a": "2025-03-11 09:25:00", "b": 647.4}, {"a": "2025-03-11 09:30:00", "b": 666.2}, {"a": "2025-03-11 09:35:00", "b": 675.0}, {"a": "2025-03-11 09:40:00", "b": 653.75}, {"a": "2025-03-11 09:45:00", "b": 639.2}, {"a": "2025-03-11 09:50:00", "b": 633.25}, {"a": "2025-03-11 09:55:00", "b": 636.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    