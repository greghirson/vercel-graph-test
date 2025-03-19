
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-19 02:00:00", "b": 621.25}, {"a": "2025-03-19 02:05:00", "b": 625.8}, {"a": "2025-03-19 02:10:00", "b": 623.4}, {"a": "2025-03-19 02:15:00", "b": 627.6}, {"a": "2025-03-19 02:20:00", "b": 630.0}, {"a": "2025-03-19 02:25:00", "b": 618.8}, {"a": "2025-03-19 02:30:00", "b": 621.8}, {"a": "2025-03-19 02:35:00", "b": 625.0}, {"a": "2025-03-19 02:40:00", "b": 612.0}, {"a": "2025-03-19 02:45:00", "b": 614.6666666666666}, {"a": "2025-03-19 02:50:00", "b": 611.8}, {"a": "2025-03-19 02:55:00", "b": 617.6}, {"a": "2025-03-19 03:00:00", "b": 613.4}, {"a": "2025-03-19 03:05:00", "b": 606.8}, {"a": "2025-03-19 03:10:00", "b": 619.4}, {"a": "2025-03-19 03:15:00", "b": 610.4}, {"a": "2025-03-19 03:20:00", "b": 599.8}, {"a": "2025-03-19 03:25:00", "b": 597.2}, {"a": "2025-03-19 03:30:00", "b": 610.5}, {"a": "2025-03-19 03:35:00", "b": 605.5}, {"a": "2025-03-19 03:40:00", "b": 596.5}, {"a": "2025-03-19 03:45:00", "b": 584.2}, {"a": "2025-03-19 03:50:00", "b": 581.5}, {"a": "2025-03-19 03:55:00", "b": 586.4}, {"a": "2025-03-19 04:00:00", "b": 590.25}, {"a": "2025-03-19 04:05:00", "b": 593.0}, {"a": "2025-03-19 04:10:00", "b": 590.0}, {"a": "2025-03-19 04:15:00", "b": 597.6666666666666}, {"a": "2025-03-19 04:20:00", "b": 585.2}, {"a": "2025-03-19 04:25:00", "b": 567.5}, {"a": "2025-03-19 04:30:00", "b": 576.2}, {"a": "2025-03-19 04:35:00", "b": 600.0}, {"a": "2025-03-19 04:40:00", "b": 621.0}, {"a": "2025-03-19 04:45:00", "b": 615.4}, {"a": "2025-03-19 04:50:00", "b": 604.8}, {"a": "2025-03-19 04:55:00", "b": 605.0}, {"a": "2025-03-19 05:00:00", "b": 595.4}, {"a": "2025-03-19 05:05:00", "b": 590.8}, {"a": "2025-03-19 05:10:00", "b": 592.8}, {"a": "2025-03-19 05:15:00", "b": 606.6}, {"a": "2025-03-19 05:20:00", "b": 602.8}, {"a": "2025-03-19 05:25:00", "b": 594.5}, {"a": "2025-03-19 05:30:00", "b": 594.5}, {"a": "2025-03-19 05:35:00", "b": 589.8}, {"a": "2025-03-19 05:40:00", "b": 595.5}, {"a": "2025-03-19 05:45:00", "b": 583.25}, {"a": "2025-03-19 05:50:00", "b": 584.2}, {"a": "2025-03-19 05:55:00", "b": 577.6}, {"a": "2025-03-19 06:00:00", "b": 560.0}, {"a": "2025-03-19 06:05:00", "b": 562.2}, {"a": "2025-03-19 06:10:00", "b": 565.2}, {"a": "2025-03-19 06:15:00", "b": 581.2}, {"a": "2025-03-19 06:20:00", "b": 589.75}, {"a": "2025-03-19 06:25:00", "b": 575.0}, {"a": "2025-03-19 06:30:00", "b": 566.25}, {"a": "2025-03-19 06:35:00", "b": 572.8}, {"a": "2025-03-19 06:40:00", "b": 569.25}, {"a": "2025-03-19 06:45:00", "b": 562.6666666666666}, {"a": "2025-03-19 06:50:00", "b": 557.0}, {"a": "2025-03-19 06:55:00", "b": 549.2}, {"a": "2025-03-19 07:00:00", "b": 550.4}, {"a": "2025-03-19 07:05:00", "b": 525.2}, {"a": "2025-03-19 07:10:00", "b": 519.0}, {"a": "2025-03-19 07:15:00", "b": 527.0}, {"a": "2025-03-19 07:20:00", "b": 546.4}, {"a": "2025-03-19 07:25:00", "b": 559.0}, {"a": "2025-03-19 07:30:00", "b": 563.6}, {"a": "2025-03-19 07:35:00", "b": 558.6666666666666}, {"a": "2025-03-19 07:40:00", "b": 557.25}, {"a": "2025-03-19 07:45:00", "b": 560.8}, {"a": "2025-03-19 07:50:00", "b": 565.8}, {"a": "2025-03-19 07:55:00", "b": 563.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    